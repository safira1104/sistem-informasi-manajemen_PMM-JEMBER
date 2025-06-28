use App\Http\Controllers\AuthController;

Route::post('/login/admin', [AuthController::class, 'loginAdmin']);
Route::post('/login/guest', [AuthController::class, 'loginGuest']);
Route::post('/register/guest', [AuthController::class, 'registerGuest']);
