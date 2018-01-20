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
	<body>
    <div class="content-wrapper">
      @include ('partials.navigation')
			<main>
        @include ('partials.header')
				@yield('content')
			</main>
			@include('partials/footer')
		</div>

		@section('bodyJS')
      @include ('partials.global.js')
		@show
	</body>
</html>
