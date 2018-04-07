<!DOCTYPE html>
<!--[if IEMobile 7 ]> <html dir="ltr" lang="en-GB"class="iem7"> <![endif]-->
<!--[if IE 8 ]> <html dir="ltr" lang="en-GB" class="ie8"> <![endif]-->
<!--[if IE 9]> <html dir="ltr" lang="en-GB" class="ie9"><![endif]-->
<!--[if gt IE 9]> <html dir="ltr" lang="en-GB" class="ie10"><![endif]-->
<html dir="ltr" lang="en-GB" class="no-js">
	<head>
		@section('headJS')
			@include ('partials.global.head')
		@show
	</head>
	<body class="portfolio">
    <div class="content-wrapper">
		  <div class="bar bar--white">
	      @include ('partials.navigation')
				<main>
				  <div class="bar bar--gradient-green offset">
						<div class="content content--center">
							<a href="{{ url('/') }}" title="Return Home" class="link link--img">
								<img src="{{ url('images/GB-Logo.png') }}" width="120" height="70" alt="GB" class="content__img">
							</a>
						</div>
					</div>
					@yield('content')
				</main>
				@include('partials/footer')
			</div>
		</div>

		@section('bodyJS')
      @include ('partials.global.js')
		@show
	</body>
</html>
