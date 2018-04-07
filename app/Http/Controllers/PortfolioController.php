<?php

Namespace App\Http\Controllers;

use App\Notifications\InboxMessage;
use App\Http\Controllers\Controller;
use App\Http\Requests\ContactFormRequest;
use App\Admin;

Class PortfolioController extends Controller
{
	public function hook() {
		return view('portfolio.hook-and-partners');
	}

  public function seetec() {
    return view('portfolio.seetec');
  }

  public function ohmygosh() {
    return view('portfolio.oh-my-gosh');
  }

  public function aim() {
    return view('portfolio.aim');
  }

  public function generational() {
    return view('portfolio.generational');
  }

  public function royals() {
    return view('portfolio.royals');
  }

  public function seventwoseven() {
    return view('portfolio.seven-two-seven');
  }

  public function reliable() {
    return view('portfolio.reliable');
  }

  public function davis() {
    return view('portfolio.davis');
  }

  public function pgm() {
    return view('portfolio.pgm');
  }

  public function holmes() {
    return view('portfolio.holmes');
  }

  public function griffin() {
    return view('portfolio.griffin');
  }

  public function method() {
    return view('portfolio.method');
  }
}
