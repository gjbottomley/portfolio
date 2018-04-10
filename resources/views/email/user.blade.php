@extends('layouts.email')

@section('content')
<table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">
<tr>
  <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
      <tr>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" align="center">
          <p style="font-family: sans-serif; font-size: 22px; font-weight: bold; margin: 0; Margin-bottom: 15px;">Hi <span style="text-transform: capitalize;">{{ $name }}</span>,</p>
          <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Thanks for getting in touch, I'll be in contact as soon as possible.</p>
        </td>
      </tr>
    </table>
  </td>
</tr>
</table>
@endsection
