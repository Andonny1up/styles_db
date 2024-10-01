// JS Personalisado para el calendario de Booknetic

(function($) {
    // Me Aseguró de que el objeto booknetic esté disponible
    if (typeof booknetic !== 'undefined') {
        // Añade la acción personalizada para editar la salida del js Calendario por lista
        booknetic.addAction('bkntc_js_filter_calendar_event_object', function(info) {
            // Aquí puedes modificar o añadir funcionalidad
            console.log('Evento del calendario modificado:', info);
            
            // guardar una copia de fc-list-item customer en una variable
            var fcListItemCustomer = $(info.el).find('.fc-list-item-customer').html();
            // guardar una copia de fc-list-item staff en una variable
            var fcLisItemStaff= $(info.el).find('.fc-list-item-staff').html();

            // Eliminar fc-list-item customer
            $(info.el).find('.fc-list-item-customer').remove();
            // Eliminar fc-list-item staff
            $(info.el).find('.fc-list-item-staff').remove();
            // Eliminar fc-list-item marker
            $(info.el).find('.fc-list-item-marker').remove();

            
            // añadir contenido a mi manera
			$(info.el).find('.fc-list-item-title').append('<div>'+ fcListItemCustomer + fcLisItemStaff + '</div>');
            // Ejemplo: añadir texto o modificar los datos del evento
            
        });
    }
})(jQuery);