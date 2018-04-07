<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/', 'ContactController@show');
Route::post('/',  'ContactController@mailToAdmin');


Route::get('/portfolio/hook-and-partners', 'PortfolioController@hook');
Route::get('/portfolio/seetec', 'PortfolioController@seetec');
Route::get('/portfolio/oh-my-gosh', 'PortfolioController@ohmygosh');
Route::get('/portfolio/holmes', 'PortfolioController@holmes');
Route::get('/portfolio/aim', 'PortfolioController@aim');
Route::get('/portfolio/generational', 'PortfolioController@generational');
Route::get('/portfolio/royals', 'PortfolioController@royals');
Route::get('/portfolio/seven-two-seven', 'PortfolioController@seventwoseven');
Route::get('/portfolio/reliable', 'PortfolioController@reliable');
Route::get('/portfolio/davis', 'PortfolioController@davis');
Route::get('/portfolio/pgm', 'PortfolioController@pgm');
Route::get('/portfolio/griffin', 'PortfolioController@griffin');
Route::get('/portfolio/method', 'PortfolioController@method');
