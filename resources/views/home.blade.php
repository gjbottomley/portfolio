@extends('layouts.master')

@section('content')
  <div class="bar bar--gradient">
    <section class="content" id="js-introduction">
      <div class="container">
        @include ('partials.introduction')
      </div>
    </section>
    <section class="content" id="js-portfolio">
      <div class="container">
        @include ('partials.portfolio.list')
      </div>
    </section>
    <section class="content" id="js-tools">
      <div class="container">
        @include ('partials.tools')
      </div>
    </section>
    <section class="content" id="js-contact">
      <div class="container">
        @include ('partials.contact')
      </div>
    </section>
  </div>
@endsection
