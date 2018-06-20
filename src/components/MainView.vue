<template>
	<section class="MainView page-header">
		<div class="container text-center">
			<div class="col-sm-12 col-md-12 col-lg-12">
				<img src="/static/Konarium.svg" alt="Konarium logo" width="100%">
			</div>
			<div class="col-sm-12 mt-4">
				<button class="btn btn-primary">Start</button>
			</div>
		</div>
	</section>
</template>

<script>

	export default {
		name: "MainView",
		mounted () {

			$(".MainView").css ("opacity", 0);
			$("button").css ("opacity", 0);

			setTimeout (() => $(".MainView").animate ({opacity: "1"}, "slow"), 300);
			setTimeout (() => $("button").animate ({opacity: "1"}, "slow"), 600);
		}
	}

</script>


<style></style>
