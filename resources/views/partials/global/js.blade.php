<script>
  window.Laravel = {!! json_encode(['csrfToken' => csrf_token(),]) !!};
</script>
<script src="{{ url('js/app/utils/skrollr.min.js') }}"></script>
<script src="{{ url('js/app/utils/jquery.min.js') }}"></script>
<script src="{{ url('js/app/bundle.js') }}" type="text/javascript"></script>
