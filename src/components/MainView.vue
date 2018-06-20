<template>
	<section class="MainView page-header">
		<div class="container text-center">
			<div v-if="CreatingUser">
				<div class="card" style="opacity: 0;">
					<div class="card-body">
						<input type="file" id="AvatarInput" style="display: none;">

						<div v-if="CurrentUser.Avatar">
							<canvas id="AvatarImage"></canvas>
						</div>
						<div v-else="" @click="GetAvatar ()" style="font-size: 2em;">
							<i class="fas fa-user-circle fa-7x" style="color: #e5e5e5e5"></i>
						</div>

						<div class="form-group bmd-form-group">
							<label for="UserName" class="col-form-label bmd-label-static">UserName</label>
							<input type="text" class="form-control" id="UserName" v-model="CurrentUser.Name">
						</div>

						<button class="btn btn-primary">Finish</button>
					</div>
				</div>
			</div>
			<div v-else="">
				<div class="col-sm-12 col-md-12 col-lg-12">
					<img src="/static/Konarium.svg" class="img-fluid" alt="Konarium logo">
				</div>
				<div class="col-sm-12 mt-4">
					<button class="btn btn-primary" @click="SwitchView ()">Start</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

	export default {
		name: "MainView",
		data () {

			return {
				CreatingUser: false,
				CurrentUser: {
					Name: "",
					Avatar: ""
				}
			};
		},
		methods: {

			SwitchView () {

				this.FadeOut ($(".MainView"), 300);

				this.ExecuteAfter (() => {

					this.ExecuteAfter (() => {

						this.CreatingUser = true;

						$(".card").hide ();

						this.FadeIn ($(".MainView"), 100);
						this.ExecuteAfter (() => {

							$(".card").show ();

							this.FadeIn ($(".card"), 0);
						}, 200);
					}, 301);
				}, 300);
			},
			GetAvatar () {

				$("#AvatarInput").change (Event => {

					const Target = Event.target.files[0];
					const Reader = new FileReader ();

					Reader.onload = (SelectedFile => 
									Event => this.SetProperlySource (Target.name.split ("."), Event.target.result)
					)(Target);

					Reader.readAsBinaryString (Target);
				});

				$("#AvatarInput").click ();
			},
			ExecuteAfter (CallBack, Delay) {

				setTimeout (CallBack, Delay);
			},
			FadeOut (ObjectReference, Delay) {

				this.ExecuteAfter (() => ObjectReference.animate ({opacity: "0"}, "slow"), Delay);
			},
			FadeIn (ObjectReference, Delay) {

				this.ExecuteAfter (() => ObjectReference.animate ({opacity: "1"}, "slow"), Delay);
			},
			SetProperlySource (NewSourceName, NewSource) {

				const NewSourceExtension = NewSourceName[NewSourceName.length - 1];
				const ConfiguredBase64 = `data:image/${NewSourceExtension};base64, ${btoa (NewSource)}`;

				const NewImage = new Image ();
				NewImage.src = ConfiguredBase64;

				this.CurrentUser.Avatar = ConfiguredBase64;


				this.ExecuteAfter (() => {

					$("#AvatarImage")[0].width = "200";
					$("#AvatarImage")[0].height = "200";
					$("#AvatarImage")[0].getContext ("2d").drawImage (NewImage, 0, 0);
					$("#AvatarImage").css ({"border-radius": "50%"});
				}, 100);
			}
		},
		mounted () {

			$(".MainView").css ("opacity", 0);

			this.FadeIn ($(".MainView"), 100);
		}
	}

</script>


<style></style>
