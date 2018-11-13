package models

import (
	"errors"
	"fmt"
	"reflect"
	"strings"
	"time"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
)

type Notificacion struct {
	Id                        int                        `orm:"column(id);pk;auto"`
	FechaCreacion             time.Time                  `orm:"column(fecha_creacion);type(timestamp with time zone);auto_now_add"`
	EstadoNotificacion        *NotificacionEstado        `orm:"column(estado_notificacion);rel(fk)"`
	CuerpoNotificacion        string                     `orm:"column(cuerpo_notificacion);type(json);null"`
	NotificacionConfiguracion *NotificacionConfiguracion `orm:"column(notificacion_configuracion);rel(fk)"`
}

func (t *Notificacion) TableName() string {
	return "notificacion"
}

func init() {
	orm.RegisterModel(new(Notificacion))
}

// AddNotificacion insert a new Notificacion into database and returns
// last inserted Id on success.
func AddNotificacion(m *Notificacion) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(m)
	return
}

// GetNotificacionById retrieves Notificacion by Id. Returns error if
// Id doesn't exist
func GetNotificacionById(id int) (v *Notificacion, err error) {
	o := orm.NewOrm()
	v = &Notificacion{Id: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}

// GetAllNotificacion retrieves all Notificacion matches certain condition. Returns empty list if
// no records exist
func GetAllNotificacion(query map[string]string, fields []string, sortby []string, order []string,
	offset int64, limit int64) (ml []interface{}, err error) {
	o := orm.NewOrm()
	qs := o.QueryTable(new(Notificacion))
	// query k=v
	for k, v := range query {
		// rewrite dot-notation to Object__Attribute
		k = strings.Replace(k, ".", "__", -1)
		if strings.Contains(k, "isnull") {
			qs = qs.Filter(k, (v == "true" || v == "1"))
		} else if strings.Contains(k, "__in") {
			arr := strings.Split(v, "|")
			qs = qs.Filter(k, arr)
		} else if strings.Contains(k, "__not_in") {
			beego.Info(k)
			k = strings.Replace(k, "__not_in", "", -1)
			qs = qs.Exclude(k, v)
		} else {
			qs = qs.Filter(k, v)
		}
	}
	// order by:
	var sortFields []string
	if len(sortby) != 0 {
		if len(sortby) == len(order) {
			// 1) for each sort field, there is an associated order
			for i, v := range sortby {
				orderby := ""
				if order[i] == "desc" {
					orderby = "-" + v
				} else if order[i] == "asc" {
					orderby = v
				} else {
					return nil, errors.New("Error: Invalid order. Must be either [asc|desc]")
				}
				sortFields = append(sortFields, orderby)
			}
			qs = qs.OrderBy(sortFields...)
		} else if len(sortby) != len(order) && len(order) == 1 {
			// 2) there is exactly one order, all the sorted fields will be sorted by this order
			for _, v := range sortby {
				orderby := ""
				if order[0] == "desc" {
					orderby = "-" + v
				} else if order[0] == "asc" {
					orderby = v
				} else {
					return nil, errors.New("Error: Invalid order. Must be either [asc|desc]")
				}
				sortFields = append(sortFields, orderby)
			}
		} else if len(sortby) != len(order) && len(order) != 1 {
			return nil, errors.New("Error: 'sortby', 'order' sizes mismatch or 'order' size is not 1")
		}
	} else {
		if len(order) != 0 {
			return nil, errors.New("Error: unused 'order' fields")
		}
	}

	var l []Notificacion
	qs = qs.OrderBy(sortFields...).RelatedSel(5)
	if _, err = qs.Limit(limit, offset).All(&l, fields...); err == nil {
		if len(fields) == 0 {
			for _, v := range l {

				o.LoadRelated(v.NotificacionConfiguracion, "NotificacionConfiguracionPerfil", 5, 1, 0, "-Id")

				ml = append(ml, v)
			}
		} else {
			// trim unused fields
			for _, v := range l {
				m := make(map[string]interface{})
				val := reflect.ValueOf(v)
				for _, fname := range fields {
					m[fname] = val.FieldByName(fname).Interface()
				}
				ml = append(ml, m)
			}
		}
		return ml, nil
	}
	return nil, err
}

// UpdateNotificacion updates Notificacion by Id and returns error if
// the record to be updated doesn't exist
func UpdateNotificacionById(m *Notificacion) (err error) {
	o := orm.NewOrm()
	v := Notificacion{Id: m.Id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Update(m); err == nil {
			fmt.Println("Number of records updated in database:", num)
		}
	}
	return
}

// DeleteNotificacion deletes Notificacion by Id and returns error if
// the record to be deleted doesn't exist
func DeleteNotificacion(id int) (err error) {
	o := orm.NewOrm()
	v := Notificacion{Id: id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Delete(&Notificacion{Id: id}); err == nil {
			fmt.Println("Number of records deleted in database:", num)
		}
	}
	return
}
