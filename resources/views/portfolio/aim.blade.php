@extends('layouts.portfolio')

@section('content')
  <section class="container container--portfolio">
    <div class="site-wrapper">
      <img src="{{ url('images/portfolio/aim/aim-website.jpg') }}">
    </div>
    <div class="content center">
      <div class="content__text content__text--portfolio">
        <ul>
          <li><b>Job Role:</b> Lead Frontend Developer</li>
          <li><b>Website Description:</b> Electronic Installation Specialists</li>
        </ul>
        <p class="small">This website was built while employed at <a href="https://www.stormcreative.co.uk/" title="Storm Creative" target="_blank" class="link link--storm">Storm Creative</a> I don't claim this to be solely my work.</p>
      </div>
      <div class="button-wrapper">
        <a href="http://www.aimengineering.london/" target="_blank" class="button button--blue button--space" title="View AIM">View AIM</a>
      </div>
    </div>
    <div class="content">
      <h2 class="content__title content__title--blue">See more of my portfolio</h2>
      @include ('partials.portfolio.list')
    </div>
  </section>
@endsection
