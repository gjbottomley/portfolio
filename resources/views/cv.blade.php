@extends('layouts.cv')

@section('content')

  <div class="bar bar--gradient">
    <section class="content">
      <div class="container">
        <img src="http://portfolio.george/images/portfolio-circle.png" width="200" height="200" alt="" class="content__img content__img--portfolio-c">
        <img src="http://george-bottomley.co.nz/images/contact-circle.png" width="160" height="160" alt="Contact ball" class="content__img content__img--portfolio-d">
        <div class="cv">
          <h1>George Bottomley<span class="small">Frontend Web Developer</span></h1>
          <p><b>Address:</b> 14 Cliff Road, Leigh on Sea, Essex, SS9 1HJ (UK)</p>
          <p><b>Telephone:</b> (+44) 07714571882</p>
          <p><b>Email:</b> me@george-bottomley.co.nz</p>
          <p><b>Portfolio:</b> http://george-bottomley.co.nz</p>
          <p><b>linkedin:</b> https://uk.linkedin.com/in/gjbottomley</p>

          <h3 class="blue"><span>Introduction</span></h3>
          <p>I have held the same position at Storm Creative for a couple of years and I am now looking to progress my career further. From a young age I had always wanted to be a Web Designer. As I progressed through my career I developed a flair for Frontend development, this has allowed me to have creative input from start to finish. I'm extremely passionate about everything I produce and always put in the maximum effort.</p>

          <h4>Tools I use on a daily basis</h4>
          <p>Github, Gulp, Webpack, npm, Compass, Laravel, custom MVC frameworks, Wordpress, campaign monitor, litmus, email on acid, mailchimp, Photoshop, Illustrator, Google web Developer, Browserstack &amp; Trello.</p>

          <div class="tools">
            <img src="{{ url('/images/tools/gulp.png') }}" alt="Gulp" width="24" height="49">
            <img src="{{ url('/images/tools/laravel.png') }}" alt="Laravel" width="57" height="47">
            <img src="{{ url('/images/tools/wordpress.png') }}" alt="Wordpress" width="47" height="47">
            <img src="{{ url('/images/tools/jquery.png') }}" alt="Jquery" width="90" height="23">
            <img src="{{ url('/images/tools/sass.png') }}" alt="Sass" width="61" height="46">
            <img src="{{ url('/images/tools/illustrator.jpg') }}" alt="Adobe Illustrator" width="48" height="47">
            <img src="{{ url('/images/tools/photoshop.jpg') }}" alt="Adobe Photoshop" width="48" height="47">
            <img src="{{ url('/images/tools/git.png') }}" alt="GitHub" width="80" height="21">
          </div>
          <h3 class="pink"><span>Creative Experience &amp; skills</span></h3>

          <h4>HTML, CSS &amp; Javascript</h4>
          <p>I work to a high standard and everything I code goes through multi platform testing including devices and web browsers in some cases back to ie8. I compile my css with gulp and recently started using webpack for js bundling.</p>

          <h4>Laravel/custom ( 2015 - 2018 )</h4>
          <p>Most recently I have been working with laravel as a framework. Since my skillset is more with frontend development I've found the community for this framework incredibly helpful.</p>

          <h4>Wordpress ( 2012 - 2015 )</h4>
          <p>I consider my Wordpress knowledge to be a strong attribute. I have built a variety of custom themes using Wordpress with plugins such as woocommerce.</p>

          <h4>Emails: campaigns, coding &amp; marketing</h4>
          <p>My email development skills are particularly strong building custom html emails for clients using mailchimp and campaign monitor.</p>

          <h4>Photoshop &amp; Illustrator</h4>
          <p>I have Created countless graphics for companies for both web and print based media.</p>

          <h4>HTML5 Ad banners / Animation</h4>
          <p>I have built and animated many adsense adverts using google web designer. I also have some knowledge using After effects to create animations.</p>

          <h3 class="green"><span>Past work</span></h3>
          <h5>Storm Creative ( 2015 - June 2018 )
          <a href="https://www.stormcreative.co.uk/" target="_blank">https://www.stormcreative.co.uk/</a></h5>
  	      <p><b>Role Title:</b> Lead frontend Developer</p>
  	      <p><b>Role Duties:</b> Working with a team of 6 - 8 building fully custom designed/branded websites</p>

          <h5>Essex Digital Media ( 2012 - 2015 )</h5>
  	      <p><b>Role Title:</b> Graphic designer, Web Developer, Lead Web Developer</p>
          <p><b>Role Duties:</b> Working in a team of 2 - 4; building custom wordpress websites and creating logos and graphics.</p>
          <hr>
          <p>Notes: References apon request, available for online interviews</p>
        </div>
      </div>
      <div class="container center">
        <a href="{{ url('/MyCV.pdf') }}" download class="button button--green button--space button--no-print">Download my CV</a>
      </div>
    </section>
  </div>
@endsection
