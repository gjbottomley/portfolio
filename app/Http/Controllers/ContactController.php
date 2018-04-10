<?php

Namespace App\Http\Controllers;

use Mail;
use Illuminate\Http\Request;

Class ContactController extends Controller
{
	public function show()
	{
		return view('home');
	}

	public function store(Request $request)
	{
		$this->validate($request, [
			'name' => 'required',
			'email' => 'required|email',
			'phone' => 'required',
			'company' => 'required',
			'message' => 'required',
		]);

		Mail::send('email.admin', [
			'name' => $request->name,
			'email' => $request->email,
			'phone' => $request->phone,
			'company' => $request->company,
			'msg' => $request->message,
		], function($mail) use($request) {
			$mail->from($request->email, $request->name);

			$mail->to('me@george-bottomley.co.nz')->subject('New Website Enquiry');
		});

		Mail::send('email.user', [
			'msg' => $request->message,
			'name' => $request->name,
		], function($mail) use($request) {
			$mail->from('noreply@george-bottomley.co.nz', 'George Bottomley');

			$mail->to($request->email)->subject('Thank Your for your Enquiry');
		});
		return redirect()->back();
	}
}
