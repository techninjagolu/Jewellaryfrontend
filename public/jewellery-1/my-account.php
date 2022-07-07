<!DOCTYPE html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>My Account</title>
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
                        <h2>My Account</h2>
                    </div>
                </div>
            </div>
        </div>
        <!-- Breadcrumbs Area End -->
        <!-- My Account Area Start -->
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
                                    <li class="active">
                                        <a href="#">
                                            <i class="glyphicon glyphicon-home"></i>
                                            Overview
                                        </a>
                                    </li>
                                    <li>
                                        <a href="change-password.php">
                                            <i class="glyphicon glyphicon-user"></i>
                                            Change Password
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
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
                                <h1 class="heading-title">Your personal information</h1>
                                <p class="coupon-text">Please be sure to update your personal information if it has changed.</p>
                                <p class="required">*Required field</p>
                                <form action="#">
                                    <div class="form-row">
                                        <label><span class="required">*</span>Social title</label>
                                        <div class="radio-inline">
                                            <label class="top">
                                                <span class="checked">
                                                    <input type="radio" />
                                                </span>
                                                Mr.
                                            </label>
                                        </div>
                                        <div class="radio-inline">
                                            <label class="top">
                                                <span class="checked">
                                                    <input type="radio" />
                                                </span>
                                                Mrs.
                                            </label>
                                        </div>
                                    </div>
                                    <p class="form-row">
                                        <label><span class="required">*</span>Your Full Name</label>
                                        <input type="text" />
                                    </p>
                                    <p class="form-row">
                                        <label><span class="required">*</span>E-mail address</label>
                                        <input type="text" />
                                    </p>

                                    <div class="coupon-info">
                                        <h1 class="heading-title">Add New address</h1>
                                        <p class="form-row">
                                            <label><span class="required">*</span>Your Full Name</label>
                                            <input type="text" />
                                        </p>

                                        <p class="form-row">
                                            <label><span class="required"></span>Address Line 1</label>
                                            <input type="text" />
                                        </p>
                                        <p class="form-row">
                                            <label><span class="required"></span>Address Line 2</label>
                                            <input type="text" />
                                        </p>
                                        <p class="form-row">
                                            <label><span class="required"></span>Landmark</label>
                                            <input type="text" />
                                        </p>
                                        <p class="form-row">
                                            <label><span class="required"></span>City</label>
                                            <input type="text" />
                                        </p>
                                        <p class="form-row">
                                            <label><span class="required"></span>State</label>
                                            <input type="text" />
                                        </p>
                                        <p class="form-row">
                                            <label><span class="required"></span>Country</label>
                                            <select>
                                                <option>India</option>
                                            </select>
                                        </p>
                                        <p class="form-row">
                                            <label><span class="required"></span>Pin Code</label>
                                            <input type="text" />
                                        </p>
                                        <p class="form-row">
                                            <label><span class="required"></span>Phone Number</label>
                                            <input type="text" />
                                        </p>

                                        <div class="submit">
                                            <button name="submitcreate" id="submitcreate" type="submit" class="">
                                                <span>
                                                    <i class="fa fa-user left"></i>
                                                    Save
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
        </div>
        <!-- My Account Area End -->
        <!-- Footer Area Start -->
        <?php include'footer.php';?>
    </body>
</html>
