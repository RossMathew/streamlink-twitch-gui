import Ember from "Ember";
import Menu from "nwjs/menu";
import clipboard from "nwjs/clipboard";


export default Ember.Component.extend({
	tagName: "div",

	classNameBindings: [ "class" ],
	attributeBindings: [ "selectable:data-selectable" ],

	"class"   : "",
	selectable: true,

	contextMenu: function( event ) {
		if ( this.attrs.noContextmenu ) { return; }

		var selection = window.getSelection();
		var selected  = selection.toString();

		if ( !selected.length && event.target.tagName === "A" ) { return; }

		var menu = Menu.create();
		menu.items.pushObject({
			label  : "Copy selection",
			enabled: selected.length,
			click  : function() {
				clipboard.set( selected );
			}
		});

		menu.popup( event );
	}
});
