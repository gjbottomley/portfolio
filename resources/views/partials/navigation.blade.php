<header class="header" id="js-navigation">
  <div class="header-control">
    <div class="hamburger hamburger--squeeze js-hamburger" data-toggle="navigation">
      <div class="hamburger-box">
        <div class="hamburger-inner"></div>
      </div>
    </div>
    <div class="navigation">
      <div class="nav-bg"></div>
    </div>
  </div>
  <nav class="navigation-list">
    <ul class="nav">
      <li><a href="{{ url('/') }}" title="Welcome">Welcome</a></li>
      <li><a href="{{ url('/#introduction') }}" title="Introduction">Introduction</a></li>
      <li><a href="{{ url('/#portfolio') }}" title="Portfolio">Portfolio</a></li>
      <li><a href="{{ url('/#contact') }}" title="Contact">Contact</a></li>
    </ul>
    <div class="social-wrapper social-wrapper--blue">
      @include ('partials/social')
    </div>
  </nav>
</header>
