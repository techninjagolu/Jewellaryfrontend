<!doctype html>
<html class="no-js" lang="">
    <head>
         <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Create Account</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php include'head.php';?>
    </head>
    <body>
      
       
         <?php include'header.php';?>
        <!-- Breadcrumbs Area Start -->
        <div class="breadcrumbs-area2">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2>Login / Create An Account</h2>
					</div>
				</div>
			</div>
		</div>
        <!-- Breadcrumbs Area End -->
		<!-- Login Account Area Start -->
		<div class="login-account-area section-padding">
			<div class="container">
				<div class="row">
					<div class="account-details">
						<div class="col-lg-6 col-md-6 col-sm-6">
							<form method="post" class="create-account-form" action="#">
								<h1 class="heading-title">Create an account</h1>
								<p class="form-row">
									<label>Email address</label>
									<input type="email">
								</p>	
								<div class="submit">					
									<button name="submitcreate" id="submitcreate" type="submit" class="">
										<span>
											<i class="fa fa-user left"></i>
											Create an account
										</span>
									</button>
								</div>		
							</form>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-6">
							<form method="post" class="login-form" action="#">
								<h1 class="heading-title">Already registered?</h1>
								<p class="form-row">
									<label>Email address</label>
									<input type="email">
								</p>
								<p class="form-row">
									<label>Password</label>
									<input type="password">
								</p>
								<p class="lost-password form-group"><a rel="nofollow" href="#">Forgot your password?</a></p>
								<div class="submit">					
									<button name="submitcreate2" id="submitcreate2" type="submit" class="">
										<span><i class="fa fa-lock"></i>Sign In</span>
									</button>
								</div>

                                <div class="or-seperator"><i>or</i></div>
                                <p class="text-center">Login with your social media account</p>
                                <div class="text-center social-btn">
                                    <a href="#" class="btn btn-secondary"><i class="fa fa-facebook"></i>&nbsp; Facebook</a>
                                    <a href="#" class="btn btn-info"><i class="fa fa-twitter"></i>&nbsp; Twitter</a>
                                    <a href="#" class="btn btn-danger"><i class="fa fa-google"></i>&nbsp; Google</a>
                                </div>
                                
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Login Account Area End -->
         <?php include'footer.php';?> </body> </html>