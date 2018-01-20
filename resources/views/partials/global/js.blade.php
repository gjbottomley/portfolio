<script>
  window.Laravel = {!! json_encode(['csrfToken' => csrf_token(),]) !!};
</script>
<script src="{{ url('js/app/utils/skrollr.min.js') }}"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="{{ url('js/app/bundle.js') }}" type="text/javascript"></script>
