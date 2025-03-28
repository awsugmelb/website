---
title: Submit a talk
slug: submit-talk
---

<div class="row ">
<div class="col col-md-8">
<form action="https://formspree.io/xjvgqzvn" method="POST">
<div class="row form-group">
    <div class="col">
        <label for="talk-title" class="form-label-header">Talk Title <span class="text-danger">*</span></label>
        <input type="text" class="form-control" id="talk-title" name="Title" required="">
    </div>
</div>
<div class="row form-group">
    <div class="col">
        <label for="description" class="form-label-header">Brief Description <span class="text-danger">*</span></label>
        <textarea id="description" class="form-control" name="Description" required="" style="height: 200px;"></textarea>
    </div>
</div>
<div class="row row-cols-1 row-cols-sm-2">
    <div class="col form-group">
        <label for="format" class="form-label-header">Talk Format <span class="text-danger">*</span></label>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="Format" id="formatFull" value="Full Presentation" checked="">
            <label for="formatFull">Full Presentation (20 – 30 minutes)</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="Format" id="formatLightning" value="Lightning Talk">
            <label for="formatLightning">Lightning Talk (5 – 10 minutes)</label>
        </div>
    </div>
    <div class="col form-group">
        <label for="level" class="form-label-header">Level <span class="text-danger">*</span></label>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="Level" id="level100" value="Level 100" checked="">
            <label for="level100">Level 100 (Beginner to AWS)</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="Level" id="level200" value="Level 200">
            <label for="level200">Level 200 (Introduction to Service)</label>
        </div>
        <div class="form-check"><input class="form-check-input" type="radio" name="Level" id="level300" value="Level 300">
            <label for="level300">Level 300 (Advanced)</label>
        </div>
        <div class="form-check"><input class="form-check-input" type="radio" name="Level" id="level400" value="Level 400">
            <label for="level400">Level 400 (Expert)</label>
        </div>
    </div>
</div>
<hr>
<div class="row form-group">
    <div class="col">
        <label for="name" class="form-label-header">Your Name <span class="text-danger">*</span></label>
        <input type="text" class="form-control" id="name" name="Name" required="">
    </div>
</div>
<div class="row form-group">
    <div class="col">
        <label for="pronouns" class="form-label-header">What pronouns would you like us to use for you? <span
                class="text-danger">*</span></label>
        <input type="text" class="form-control" id="pronouns" aria-describedby="pronouns-help" name="Pronouns"
            required=""><small id="email-help" class="form-text text-muted">When we introduce you we want to make you
            feel as comfortable as possible. For example: a nickname, your first name, he/him, she/her,
            they/them</small>
    </div>
</div>
<div class="row form-group">
    <div class="col">
        <label for="email" class="form-label-header">Email Address <span class="text-danger">*</span></label>
        <input type="email" class="form-control" id="email" aria-describedby="email-help" name="Email"
            required=""><small id="email-help" class="form-text text-muted">Your email address is never published. It's purely so we can get in touch.</small>
    </div>
</div>
<div class="row form-group">
    <div class="col">
        <label for="bio" class="form-label-header">About You / Short Bio</label>
        <textarea id="bio" class="form-control" name="Bio" aria-describedby="bio-help"
            style="height: 100px;"></textarea><small id="bio-help" class="form-text text-muted">A little about yourself.
            We use this to introduce you at the event as well as on social media. So include anything you'd like us to say about you.</small>
    </div>
</div>
<hr>
<div class="row form-group">
    <div class="col">
        <label for="mastodon" class="form-label-header">Mastodon</label>
        <div class="input-group">
            <div class="input-group-prepend">
                <div class="input-group-text">@</div>
            </div><input type="mastodon" class="form-control" id="mastodon" name="Mastodon"
                aria-describedby="mastodon-help">
        </div><small id="mastodon-help" class="form-text text-muted">We regularly promote events on <a rel="me"
                href="https://awscommunity.social/@awsmelb">Mastodon</a>. Please include your username if you’d like
            us to @-mention you.</small>
    </div>

</div>
<div class="row form-group">
    <div class="col">
        <label for="linkedin" class="form-label-header">LinkedIn</label>
        <div class="input-group">
            <div class="input-group-prepend">
                <div class="input-group-text">linkedin.com/in/</div>
            </div>
            <input type="linkedin" class="form-control" id="linkedin" name="Linkedin"
                aria-describedby="linkedin-help">
        </div><small id="linkedin-help" class="form-text text-muted">We regularly promote events on our <a
                href="https://www.linkedin.com/company/aws-user-group-melbourne/">LinkedIn</a>. Please include your
            username if you’d like us to mention you.</small>
    </div>
</div>
<hr>
<div class="row form-group">
    <div class="col">
        <label for="comments" class="form-label-header">Additional Comments</label>
        <textarea id="comments" class="form-control" name="Comments" aria-describedby="comments-help"
            style="height: 100px;"></textarea><small id="comments-help" class="form-text text-muted">Anything extra
            you'd like to add.</small>
    </div>
</div>
<div class="row form-group">
    <div class="col"><button class="btn btn-primary" type="submit">Submit Talk</button></div>
</div>
</form>
</div>
<div class="col d-none d-md-block"><img src="/img/submit-talk.jpg" class="border p-3 rounded-lg"
        style="max-width: 90%;"></div>
</div>