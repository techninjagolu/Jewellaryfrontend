<!DOCTYPE html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>Change Password</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <?php include'head.php';?>
        <link rel="stylesheet" href="css/my-profile.css">
    </head>
    <body>
        <?php include'header.php';?>
        <!-- Breadcrumbs Area Start -->
        <div class="breadcrumbs-area2">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2>Change Password</h2>
                    </div>
                </div>
            </div>
        </div>
        <!-- Breadcrumbs Area End -->
        <!-- Change Password Area Start -->
        <div class="my-account-area section-padding">
            <div class="container">
                <div class="row profile">
                    <div class="col-md-3">
                        <div class="profile-sidebar">
                            <!-- SIDEBAR USERPIC -->
                            <div class="profile-userpic">
                                <img
                                    src="https://gravatar.com/avatar/31b64e4876d603ce78e04102c67d6144?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png"
                                    class="img-responsive"
                                    alt=""
                                />
                            </div>
                            <!-- END SIDEBAR USERPIC -->
                            <!-- SIDEBAR USER TITLE -->
                            <div class="profile-usertitle">
                                <div class="profile-usertitle-name">
                                    Jason Davis
                                </div>
                                <div class="profile-usertitle-job">
                                    Developer
                                </div>
                            </div>
                            <!-- END SIDEBAR USER TITLE -->
                            <!-- SIDEBAR BUTTONS -->
                            <div class="profile-userbuttons">
                                <button type="button" class="btn btn-success btn-sm">Follow</button>
                                <button type="button" class="btn btn-danger btn-sm">Message</button>
                            </div>
                            <!-- END SIDEBAR BUTTONS -->
                            <!-- SIDEBAR MENU -->
                            <div class="profile-usermenu">
                                <ul class="nav">
                                    <li>
                                        <a href="my-account.php">
                                            <i class="glyphicon glyphicon-home"></i>
                                            Overview
                                        </a>
                                    </li>
                                    <li class="active">
                                        <a href="change-password.php">
                                            <i class="glyphicon glyphicon-user"></i>
                                            Change Password
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="glyphicon glyphicon-ok"></i>
                                            My Order
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="glyphicon glyphicon-flag"></i>
                                            My Retrun Order
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <!-- END MENU -->

                            <div class="portlet light bordered">
                                <!-- STAT -->
                                <div class="row list-separated profile-stat">
                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                        <div class="uppercase profile-stat-title">37</div>
                                        <div class="uppercase profile-stat-text">Projects</div>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                        <div class="uppercase profile-stat-title">51</div>
                                        <div class="uppercase profile-stat-text">Tasks</div>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                        <div class="uppercase profile-stat-title">61</div>
                                        <div class="uppercase profile-stat-text">Uploads</div>
                                    </div>
                                </div>
                                <!-- END STAT -->
                                <div>
                                    <h4 class="profile-desc-title">About Jason Davis</h4>
                                    <span class="profile-desc-text"> Lorem ipsum dolor sit amet diam nonummy nibh dolore. </span>
                                    <div class="margin-top-20 profile-desc-link">
                                        <i class="fa fa-globe"></i>
                                        <a href="#">apollowebstudio.com</a>
                                    </div>
                                    <div class="margin-top-20 profile-desc-link">
                                        <i class="fa fa-twitter"></i>
                                        <a href="#">@jasondavisfl</a>
                                    </div>
                                    <div class="margin-top-20 profile-desc-link">
                                        <i class="fa fa-facebook"></i>
                                        <a href="#">JasonDavisFL</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="profile-content">
                           <div class="coupon-info">
                                                <h1 class="heading-title">Change Password</h1>
                                                <p class="required">*Required field</p>
                                                <form action="#">
                                                    <p class="form-row">
                                                        <label><span class="required">*</span>Current Password</label>
                                                        <input type="text">
                                                    </p>
                                                    <p class="form-row">
                                                        <label>New Password</label>
                                                        <input type="text">
                                                    </p>
                                                    <p class="form-row">
                                                        <label>Confirmation</label>
                                                        <input type="text">
                                                    </p>

                                                    <div class="submit">
                                                    <button name="submitcreate" id="submitcreate" type="submit" class="">
                                                        <span>
                                                            <i class="fa fa-user left"></i>
                                                            Update
                                                        </span>
                                                    </button>
                                                </div>
                                                </form>
                                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
        </div>
        <!-- Change Password Area End -->
        <!-- Footer Area Start -->
        <?php include'footer.php';?>
    </body>
</html>
