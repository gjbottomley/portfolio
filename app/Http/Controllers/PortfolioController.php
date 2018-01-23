<?php

Namespace App\Http\Controllers;

use App\Notifications\InboxMessage;
use App\Http\Controllers\Controller;
use App\Http\Requests\ContactFormRequest;
use App\Admin;

Class PortfolioController extends Controller
{
	public function hook()
	{
		return view('portfolio.hook-and-partners');
	}

	public function mailToAdmin(ContactFormRequest $message, Admin $admin)
	{
    //send the admin an notification
		$admin->notify(new InboxMessage($message));
		// redirect the user back
	}
}
