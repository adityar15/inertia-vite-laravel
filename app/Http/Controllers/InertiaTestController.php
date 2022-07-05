<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

use App\Helper\DetectColorFromImage;
use Illuminate\Support\Facades\Http;

class InertiaTestController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('App');
    }


    public function process(Request $request)
    {
      
      $request->validate([
        'image' => ['required', 'image']
      ]);

      $colors = (new DetectColorFromImage($request->image))->detect();

      session([
        'colors' => $colors
      ]);

      return redirect()->back();    
    
    }
}
