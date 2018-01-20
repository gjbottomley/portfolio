<div class="grid-row grid-row--middle">
  <div class="grid grid--5">
    <h2 class="content__title content__title--contact ">Get in touch</h2>
    <div class="content__text content__text--contact">
      <p>If you need to discuss a project, want to see some more work or just fancy a chat; use the contact form or use my details below&hellip;</p>
    </div>
    <div>
      <a href="mailto:george-bottomley@hotmail.co.uk" title="Email me" class="link link--contact">george-bottomley@hotmail.co.uk</a>
    </div>
    <div>
      <a href="tel:07714571882" title="Email me" class="link link--contact">07714571882</a>
    </div>
    <div class="social-wrapper mobile-hide">
      @include ('partials/social')
    </div>
  </div>
  <div class="grid grid--7">
    <div class="tile-wrapper">
      <div class="tile" id="js-form-wrapper">
        {!! Form::open(['class' => 'form']) !!}
        {{ csrf_field() }}
        <div class="form-group">
            {!! Form::text('name', null, ['class' => 'form__input', 'placeholder' => 'Your Name', 'pattern' => '([A-zÀ-ž\s]){1,}', 'required' => 'required', 'title' => 'Your name cannot contain any numbers or special characters']) !!}
            {!! Form::label('name', 'Your Name', ['class' => 'form__label']) !!}
        </div>

        <div class="form-group">
            {!! Form::email('email', null, ['class' => 'form__input', 'placeholder' => 'E-mail Address', 'required' => 'required']) !!}
            {!! Form::label('email', 'E-mail Address', ['class' => 'form__label']) !!}
        </div>
        <div class="form-group">
            {!! Form::tel('phone', null, ['class' => 'form__input', 'placeholder' => 'Phone Number', 'pattern' => '^\+?\d{0,13}', 'required' => 'required', 'title' => 'Your phone number can only contain numbers']) !!}
            {!! Form::label('phone', 'Phone', ['class' => 'form__label']) !!}
        </div>

        <div class="form-group">
            {!! Form::text('company', null, ['class' => 'form__input', 'placeholder' => 'Company Name', 'pattern' => '([A-z0-9À-ž\s]){2,}', 'required' => 'required']) !!}
            {!! Form::label('company', 'Company', ['class' => 'form__label']) !!}
        </div>

        <div class="form-group">
            {!! Form::textarea('msg', null, ['class' => 'form__input form__input--textarea', 'placeholder' => 'Your Message', 'required' => 'required', 'title' => 'e.g this is an awesome website.']) !!}
            {!! Form::label('msg', 'Message', ['class' => 'form__label']) !!}
        </div>

        <div class="form-group form-group--submit">
          {!! Form::submit('Submit', ['class' => 'form__submit', 'id' => 'js-form-submit']) !!}
        </div>

        {!! Form::close() !!}
        <div class="form__success hide" id="js-form-success">
          <div class="form__success-inner">
            <img src="{{ url('images/email.jpg') }}" class="content__img content__img--envelope animated fadeInLeft" width="198" height="79" alt="Email Sent!">
            <h3 class="content__title content__title--blue content__title--small">I see you've sent me a message!</h3>
            <div class="">I’ll be in contact as soon as possible.</div>
            <div class=""></div>
          </div>
        </div>
      </div>
      <img src="{{ url('images/contact-circle.png') }}" width="160" height="160" alt="Contact ball" class="circle">
    </div>

    <div class="social-wrapper desktop-hide">
      @include ('partials/social')
    </div>
  </div>
</div>
