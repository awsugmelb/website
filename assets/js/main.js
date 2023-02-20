window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var is_root = location.pathname == "/";
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("navbar").classList = "navbar-scrolled navbar-light";
    } else {
        if (is_root) {
            document.getElementById("navbar").classList = "navbar-at-top navbar-dark navbar-index";
        } else {
            document.getElementById("navbar").classList = "navbar-at-top navbar-dark navbar-page";
        }
    }
}

function nextMeetup() {
    var is_root = location.pathname == "/";
    if (!is_root) { return; }
    var getJSON = function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            var status = xhr.status;
            if (status === 200) {
                callback(null, xhr.response);
            } else {
                callback(status, xhr.response);
            }
        };
        xhr.send();
    };
    getJSON('https://sig4ybows8.execute-api.ap-southeast-2.amazonaws.com/v1/event/next',
        function (err, data) {
            if (err !== null) {
                alert('Something went wrong: ' + err);
            } else {
                if (Object.keys(data).length === 0) {
                    document.getElementById("nexteventholder").innerHTML = '<div class="next-event not-scheduled">No event scheduled yet</div>';
                } else {
                    var nextmeetup = data[0]
                    var meetupimage = `<img src="${nextmeetup.featured_photo.photo_link}" alt="Meetup event photos" class="float-right"/>`
                    var dateformat = {
                        day: "numeric",
                        year: "numeric",
                        month: "long"
                    },
                        timeformat = {
                            hour: "numeric",
                            minute: "2-digit"
                        }
                    var meetupdate = `<h4>When</h4><div class="display-6">${new Date(nextmeetup.time).toLocaleDateString(void 0, dateformat)}<br/>${new Date(nextmeetup.time).toLocaleTimeString(void 0, timeformat)}</div>`
                    var location = nextmeetup.venue ? [nextmeetup.venue.name, nextmeetup.venue.address_1, nextmeetup.venue.address_2, nextmeetup.venue.address_3, nextmeetup.venue.city].filter((function (n) {
                        return null != n
                    })).join("<br />") : "To be advised"
                    var meetuplocation = `<h4>Where</h4><div class="display-6">${location}</div>`
                    // var description = nextmeetup.plain_text_description.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>').replace(/\\#/gim, "#").replace(/\\-/gim, "-").replace(/\\\*/gim, "*").replace(/\\\|/gim, "|").replace(/\\\(/gim, "(").replace(/\\\)/gim, ")").replace(/\\\[/gim, "[").replace(/\\\]/gim, "]");
                    var description = nextmeetup.plain_text_description
                        .replace(/\\#/gim, "#")
                        .replace(/\\-/gim, "-")
                        .replace(/\\\+/gim, "+")
                        .replace(/\\\*/gim, "*")
                        .replace(/\\\|/gim, "|")
                        .replace(/\\\(/gim, "(")
                        .replace(/\\\)/gim, ")")
                        .replace(/\\\[/gim, "[")
                        .replace(/\\\]/gim, "]")
                        .replace(/[^\[\(](https:\/\/[\w./]+)[^\])]/g, ' [$1]($1)') //links
                        .replace(/^# (.*$)/gim, '#### $1') // h4 level tags instead of h1
                        .replace(/#### Agenda\n\n\| /gim, "#### Agenda\n\n| Time | Action |\n|---|---|\n| ");
                    var converter = new showdown.Converter();
                    converter.setOption('tables', true);
                    description = converter.makeHtml(description);
                    var meetupdescription = `<h4 class="display-5" style="clear:both">${nextmeetup.name}</h4><div class="next-event-description">${description}</div>`
                    var meetuprsvps = `<h4 class="display-6">RSVP</h4>`
                    if (nextmeetup.rsvpable || nextmeetup.rsvpable_after_join) {
                        meetuprsvps = `${meetuprsvps}<div class="next-event-open"><div class="next-event-spaces">Want to join us? ${(nextmeetup.rsvp_limit - nextmeetup.yes_rsvp_count)} spaces available</div><a class="btn btn-join mt-3" href="${nextmeetup.link}" target="_blank">RSVP via meetup.com</a></div>`
                    } else if (nextmeetup.rsvp_limit == nextmeetup.yes_rsvp_count) {
                        meetuprsvps = `${meetuprsvps}<div class="next-event-open"><div class="next-event-spaces">Unfortunately the RSVP list is full, but you can still <a href="${nextmeetup.link}" target="_blank">join the waitlist on meetup.com</a> or <a href="/live" target="_blank">watch the livestream</a></div><div><a class="btn btn-join mt-3" href="${nextmeetup.link}" target="_blank">join the waitlist on meetup.com</a><a href="/live" class="btn btn-join mt-3" target="_blank">watch the livestream</a></div>`
                    }
                    document.getElementById("nexteventholder").innerHTML = `<div class="next-event-open">${meetupimage}${meetupdate}${meetuplocation}${meetupdescription}${meetuprsvps}</div>`
                }
            }
        });
}
nextMeetup();