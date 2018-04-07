@extends('layouts.master')

@section('content')

  @include ('partials.header')
  <div class="bar bar--gradient">
    <section class="content" id="introduction">
      <div class="container">
        @include ('partials.introduction')
      </div>
    </section>
    <section class="content" id="portfolio">
      <div class="container">
        <img src="{{ url('images/portfolio-circle.png') }}" width="200" height="200" alt="" class="content__img content__img--portfolio-c">
        <div class="content-wrap center">
          <h2 class="content__title content__title--green">Portfolio</h2>
          <div class="content__text">
            <p>Below are some projects I have worked on recently.</p>
          </div>
        </div>
        @include ('partials.portfolio.list')
      </div>
    </section>
    <section class="content" id="contact">
      <div class="container">
        @include ('partials.contact')
      </div>
    </section>
  </div>
@endsection
