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

function loadnext(n, t, e) {
    "use strict";
    e("tUrg"),
        e("pIFo"),
        e("f3/d");
    var r = e("q1tI"),
        o = e.n(r),
        i = (e("Wbzz"), e("i8i4"), e("1VtT")),
        l = e.n(i),
        a = e("fUUT"),
        u = e.n(a),
        s = e("i1Fr"),
        c = e.n(s);
    var f = {
        day: "numeric",
        year: "numeric",
        month: "long"
    },
        p = {
            hour: "numeric",
            minute: "2-digit"
        },
        h = {
            day: "numeric",
            year: "numeric",
            month: "long",
            hour: "numeric",
            minute: "2-digit"
        },
        d = function (n) {
            var t,
                e;
            function r(t) {
                var e;
                return (e = n.call(this, t) || this).state = {
                    nextEvent: null
                }, e
            }
            e = n,
                (t = r).prototype = Object.create(e.prototype),
                t.prototype.constructor = t,
                t.__proto__ = e;
            var i = r.prototype;
            return i.componentDidMount = function () {
                var n = this;
                fetch("https://sig4ybows8.execute-api.ap-southeast-2.amazonaws.com/v1/event/next", {
                    mode: "cors"
                }).then((function (n) {
                    return n.json()
                })).then((function (t) {
                    n.setState({
                        nextEvent: t && t[0] ? t[0] : null
                    })
                }))
            }, i.render = function () {
                var n = this.state.nextEvent;
                return 0 == n ? o.a.createElement("div", {
                    className: "next-event not-scheduled"
                }, "No events scheduled.") : null == n ? o.a.createElement("div", {
                    className: "next-event loading"
                }, "Checking...") : o.a.createElement("div", {
                    className: "next-event"
                }, n.featured_photo && n.featured_photo.photo_link && o.a.createElement("img", {
                    src: n.featured_photo.photo_link,
                    alt: "Meetup event photo",
                    className: "float-right"
                }), o.a.createElement("h4", null, "When"), o.a.createElement("div", {
                    className: "display-6"
                }, new Date(n.time).toLocaleDateString(void 0, f), o.a.createElement("br", null), new Date(n.time).toLocaleTimeString(void 0, p)), o.a.createElement("h4", null, "Where"), o.a.createElement("div", {
                    className: "display-6",
                    dangerouslySetInnerHTML: {
                        __html: n.venue ? [n.venue.name, n.venue.address_1, n.venue.address_2, n.venue.address_3, n.venue.city].filter((function (n) {
                            return null != n
                        })).join("<br />") : "To be advised"
                    }
                }), o.a.createElement("h4", {
                    className: "display-5"
                }, n.name), o.a.createElement("div", {
                    className: "next-event-description"
                }, l()().use(u.a).use(c.a).processSync(n.plain_text_description.replace(/^#/gim, "####").replace(/#### Agenda\n\n\| /gim, "#### Agenda\n\n| Time | Action |\n|---|---|\n| ")).contents), o.a.createElement("h4", {
                    className: "display-6"
                }, "RSVP"), n.rsvpable || n.rsvpable_after_join ? o.a.createElement("div", {
                    className: "next-event-open"
                }, o.a.createElement("div", {
                    className: "next-event-spaces"
                }, "Want to join us?", n.rsvp_limit ? " " + (n.rsvp_limit - n.yes_rsvp_count) + " spaces available" : " " + n.yes_rsvp_count + " members attending"), o.a.createElement("a", {
                    className: "btn btn-join mt-3",
                    href: n.link,
                    target: "_blank"
                }, "RSVP via Meetup.com")) : o.a.createElement("div", {
                    className: "next-event-closed"
                }, new Date(n.rsvp_rules.open_time) > new Date ? "RSVP opens " + new Date(n.rsvp_rules.open_time).toLocaleDateString(void 0, h) : "RSVP has closed."))
            }, r
        }(o.a.Component);
    t.a = d
}

function nextMeetup() {
    var is_root = location.pathname == "/";
    if (!is_root) { return ; }
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
        function(err, data) {
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
                    if (nextmeetup.rsvpable || nextmeetup.rsvpable_after_join ) {
                        meetuprsvps = `${meetuprsvps}<div class="next-event-open"><div class="next-event-spaces">Want to join us? ${(nextmeetup.rsvp_limit - nextmeetup.yes_rsvp_count)} spaces available</div><a class="btn btn-join mt-3" href="${nextmeetup.link}" target="_blank">RSVP via meetup.com</a></div>`
                    }
                    document.getElementById("nexteventholder").innerHTML = `<div class="next-event-open">${meetupimage}${meetupdate}${meetuplocation}${meetupdescription}${meetuprsvps}</div>`
                }
            }
    });
}
nextMeetup();