<script>
  window.Laravel = {!! json_encode(['csrfToken' => csrf_token(),]) !!};
</script>
<script src="{{ url('js/app/utils/skrollr.min.js') }}"></script>
<script src="{{ url('js/app/utils/jquery.min.js') }}"></script>
<script src="{{ url('js/app/toggles.js') }}"></script>
<script src="{{ url('js/app/global.js') }}"></script>
