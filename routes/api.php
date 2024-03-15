<?php

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request): JsonResponse {
    return response()->json(['hello' => 'world']);
});

Route::post('/user', function (Request $request) {
    return $request->user();
});
