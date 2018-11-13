package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionController"],
        beego.ControllerComments{
            Method: "Post",
            Router: `/`,
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionController"],
        beego.ControllerComments{
            Method: "GetAll",
            Router: `/`,
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionController"],
        beego.ControllerComments{
            Method: "GetOne",
            Router: `/:id`,
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionController"],
        beego.ControllerComments{
            Method: "Put",
            Router: `/:id`,
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionController"],
        beego.ControllerComments{
            Method: "Delete",
            Router: `/:id`,
            AllowHTTPMethods: []string{"delete"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionPerfilController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionPerfilController"],
        beego.ControllerComments{
            Method: "Post",
            Router: `/`,
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionPerfilController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionPerfilController"],
        beego.ControllerComments{
            Method: "GetAll",
            Router: `/`,
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionPerfilController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionPerfilController"],
        beego.ControllerComments{
            Method: "GetOne",
            Router: `/:id`,
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionPerfilController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionPerfilController"],
        beego.ControllerComments{
            Method: "Put",
            Router: `/:id`,
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionPerfilController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionConfiguracionPerfilController"],
        beego.ControllerComments{
            Method: "Delete",
            Router: `/:id`,
            AllowHTTPMethods: []string{"delete"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionController"],
        beego.ControllerComments{
            Method: "Post",
            Router: `/`,
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionController"],
        beego.ControllerComments{
            Method: "GetAll",
            Router: `/`,
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionController"],
        beego.ControllerComments{
            Method: "GetOne",
            Router: `/:id`,
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionController"],
        beego.ControllerComments{
            Method: "Put",
            Router: `/:id`,
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionController"],
        beego.ControllerComments{
            Method: "Delete",
            Router: `/:id`,
            AllowHTTPMethods: []string{"delete"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionEstadoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionEstadoController"],
        beego.ControllerComments{
            Method: "Post",
            Router: `/`,
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionEstadoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionEstadoController"],
        beego.ControllerComments{
            Method: "GetAll",
            Router: `/`,
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionEstadoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionEstadoController"],
        beego.ControllerComments{
            Method: "GetOne",
            Router: `/:id`,
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionEstadoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionEstadoController"],
        beego.ControllerComments{
            Method: "Put",
            Router: `/:id`,
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionEstadoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionEstadoController"],
        beego.ControllerComments{
            Method: "Delete",
            Router: `/:id`,
            AllowHTTPMethods: []string{"delete"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionTipoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionTipoController"],
        beego.ControllerComments{
            Method: "Post",
            Router: `/`,
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionTipoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionTipoController"],
        beego.ControllerComments{
            Method: "GetAll",
            Router: `/`,
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionTipoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionTipoController"],
        beego.ControllerComments{
            Method: "GetOne",
            Router: `/:id`,
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionTipoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionTipoController"],
        beego.ControllerComments{
            Method: "Put",
            Router: `/:id`,
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionTipoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/notificaciones_crud/controllers:NotificacionTipoController"],
        beego.ControllerComments{
            Method: "Delete",
            Router: `/:id`,
            AllowHTTPMethods: []string{"delete"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

}
