import Vue from "vue";
import App from "./App";
import router from "./router";


new Vue ({
	el: "#App",
	router,
	components: { App },
	template: "<App/>"
});
