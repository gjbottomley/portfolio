@extends('layouts.master')

@section('content')
  <div class="bar bar--gradient">
    <section class="container">
      <div class="content center">
          <img src="{{ url('images/GB-Logo.png') }}" width="120" height="70" alt="GB" class="content__img">
      </div>
      <div class="monitor-wrapper">
        <div class="monitor-inner animated slideInRight">
          <div class="monitor-overlay"></div>
          <div class="site-wrapper animated zoomIn">
            <img src="{{ url('images/portfolio/hook/hook-website.jpg') }}">
          </div>
        </div>
        <div class="monitor-stand monitor-inner animated slideInUp">
          <div class="monitor-stand__brand"></div>
        </div>
        <div class="monitor-stand__platform animated bounceInDown"></div>
      </div>
      <div class="content center">
        <div class="button-wrapper">
          <a href="https://www.hookandpartners.co.uk/" target="_blank" class="button button--green" titlw="View Hook &amp; Partners">View Hook &amp; Partners</a>
        </div>
      </div>
  </div>
@endsection
