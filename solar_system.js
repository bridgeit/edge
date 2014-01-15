/*
JavaScript programming, graphics, and DHTML
copyright (c) Adrian R. Ashford, March 2004.

JavaScript(s) used with permission by Astronomy Now.

From http://astronomynow.com/javascript/solar_system.js

Modified to store planetary positions in orrery object.
*/

function setup()
{
if (!window.orrery)  {
    window.orrery = {};
}
var nowdate = new Date();
var utc_day = nowdate.getUTCDate();
var utc_month = nowdate.getUTCMonth() + 1;
var utc_year = nowdate.getUTCFullYear();
zone = -(nowdate.getTimezoneOffset() / 60);
var utc_hours = nowdate.getUTCHours();
var utc_mins = nowdate.getUTCMinutes();
var utc_secs = nowdate.getUTCSeconds();
utc_mins += utc_secs / 60.0;
utc_mins = Math.floor((utc_mins + 0.5));
if (utc_mins < 10) utc_mins = "0" + utc_mins;
if (utc_mins > 59) utc_mins = 59;
if (utc_hours < 10) utc_hours = "0" + utc_hours;
if (utc_month < 10) utc_month = "0" + utc_month;
if (utc_day < 10) utc_day = "0" + utc_day;
window.orrery.date_txt = utc_day + "/" + utc_month + "/" + utc_year;
window.orrery.ut_h_m = utc_hours + ":" + utc_mins;
planets();
}

function proper_ang(big)
{
with (Math)
{
var tmp = 0;
if (big > 0)
{
tmp = big / 360.0;
tmp = (tmp - floor(tmp)) * 360.0;
}
else
{
tmp = ceil(abs(big / 360.0));
tmp = big + tmp * 360.0;
}
}
return tmp;
}

function proper_ang_rad(big)
{
with (Math)
{
var tmp = 0;
if (big > 0)
{
tmp = big / 2 / PI;
tmp = (tmp - floor(tmp)) * 2 * PI;
}
else
{
tmp = ceil(abs(big / 2 / PI));
tmp = big + tmp * 2 * PI;
}
}
return tmp;
}

function round_10(num)
{
return Math.floor((num + 0.05) * 10) / 10;
}

function round_100(num)
{
return Math.floor((num + 0.005) * 100) / 100;
}

function isValidDate(dateStr)
{ 
if (IsValidTime(window.orrery.ut_h_m) == true)
{
var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;
var matchArray = dateStr.match(datePat);
if (matchArray == null) { 
alert("Date is not in a valid format.") 
return false; 
} 
var month = matchArray[3];
var day = matchArray[1]; 
var year = matchArray[4]; 
if (month < 1 || month > 12) {
alert("Month must be between 1 and 12."); 
return false; 
} 
if (year < 2000 || year > 2008) {
alert("Year must be between 2000 and 2008."); 
return false; 
} 
if (day < 1 || day > 31) {
alert("Day must be between 1 and 31."); 
return false; 
} 
if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
alert("Month " + month + " doesn't have 31 days!") 
return false 
} 
if (month == 2) {
var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)); 
if (day > 29 || (day == 29 && !isleap))
{ 
alert("February " + year + " doesn't have " + day + " days!"); 
return false; 
} 
} 
if (month < 10 && month.length == 1) month = "0" + month;
if (day < 10 && day.length == 1) day = "0" + day;
window.orrery.date_txt = day + "/" + month + "/" + year;
var dt_str = window.orrery.date_txt;
if ((dt_str.substring(2,3) != "/") || (dt_str.substring(5,6) != "/"))
{
alert ("Date is not in a valid format.");
return false;
}
planets();
return true;
}
else
{
return false;
}
}

function IsValidTime(timeStr)
{
var timePat = /^(\d{1,2}):(\d{2})(:(\d{2}))?(\s?(AM|am|PM|pm))?$/;
var matchArray = timeStr.match(timePat);
if (matchArray == null)
{
alert("Time is not in a valid format.");
return false;
}
var hour = matchArray[1];
var minute = matchArray[2];
if (hour < 0 || hour > 23)
{
alert("Hour must be between 0 and 23.");
return false;
}
if (minute < 0 || minute > 59)
{
alert ("Minute must be between 0 and 59.");
return false;
}
if (hour < 10 && hour.length == 1) hour = "0" + hour;
if (minute < 10 && minute.length == 1) minute = "0" + minute;
window.orrery.ut_h_m = hour + ":" + minute;
var tm_str = window.orrery.ut_h_m;
if ((tm_str.substring(2,3) != ":") && (dt_str.length != 5))
{
alert ("Time is not in a valid format.");
return false;
}
return true;
}

function time_change(tmp)
{
if (isValidDate(window.orrery.date_txt) == true)
{
var jd_temp, zz, ff, alpha, aa, bb, cc, dd, ee;
var calendar_day, calendar_month, calendar_year;
var int_day, hours, minutes;

var tm_as_str, ut_hrs, ut_mns, part_day;

var jd = julian_date();

tm_as_str = window.orrery.ut_h_m;
ut_hrs = eval(tm_as_str.substring(0,2));
ut_mns = eval(tm_as_str.substring(3,5));
part_day = ut_hrs / 24.0 + ut_mns / 1440.0;

with (Math) {

jd_temp = jd + part_day + tmp / 24.0 + 0.5;

zz = floor(jd_temp);
ff = jd_temp - zz;
alpha = floor((zz - 1867216.25) / 36524.25);
aa = zz + 1 + alpha - floor(alpha / 4);
bb = aa + 1524;
cc = floor((bb - 122.1) / 365.25);
dd = floor(365.25 * cc);
ee = floor((bb - dd) / 30.6001);
calendar_day = bb - dd - floor(30.6001 * ee) + ff;
calendar_month = ee;
if (ee < 13.5) calendar_month = ee - 1;
if (ee > 13.5) calendar_month = ee - 13;
calendar_year = cc;
if (calendar_month > 2.5) calendar_year = cc - 4716;
if (calendar_month < 2.5) calendar_year = cc - 4715;
int_day = floor(calendar_day);
hours = (calendar_day - int_day) * 24;
minutes = floor((hours - floor(hours)) * 60 + 0.5);
hours = floor(hours);
if (minutes > 59)
{minutes = 0; hours = hours + 1;}
if (calendar_month < 10) calendar_month = "0" + calendar_month;
if (int_day < 10) int_day = "0" + int_day;
if (hours < 10) hours = "0" + floor(hours);
if (minutes < 10) minutes = "0" + minutes;
}
window.orrery.date_txt = int_day + "/" + calendar_month + "/" + calendar_year;
window.orrery.ut_h_m = hours + ":" + minutes;
planets();
return true;
}
else
{
return false;
}
}

function julian_date()
{
var dt_as_str, mm, dd, yy;
var yyy, mmm, a, b;

dt_as_str = window.orrery.date_txt;

dd = eval(dt_as_str.substring(0,2));
mm = eval(dt_as_str.substring(3,5));
yy = eval(dt_as_str.substring(6,10));

with (Math) {
var yyy=yy;
var mmm=mm;
if (mm < 3)
{
yyy = yy - 1;
mmm = mm + 12;
}
a = floor(yyy/100);
b = 2 - a + floor(a/4);

return floor(365.25*yyy) + floor(30.6001*(mmm+1)) + dd + 1720994.5 + b;
}
}

function kepler(e5,m5)
{
with (Math)
{
var e,de,v;
e = m5;
for (count = 1; count <= 50; count++)
{
de = e - e5 * sin(e) - m5;
if (abs(de) <= 5e-8) break;
e = e - de / (1 - e5 * cos(e));
}
v = 2 * atan(sqrt((1 + e5) / (1 - e5)) * tan(e / 2));
return v;
}
}

function planets()
{
with (Math) {

var RAD = 180 / PI;

var Tp = new Array(0.2409,0.6152,1.0001,1.8810,11.8585,29.6147,83.6973,164.1466,249.0398);
var long_at_e = new Array(350.8136,18.3905,331.5662,163.9450,175.2197,106.9319,333.0810,314.8998,245.4198);
var l_of_p = new Array(77.4608,131.7130,102.7909,336.0821,14.7603,94.2547,170.4720,66.074,223.7720);
var e_of_orbit = new Array(0.205629,0.006777,0.016705,0.09344,0.048988,0.05655,0.050037,0.008173,0.251514);
var sma_of_orbit = new Array(0.387098,0.723328,1.000016,1.523756,5.201707,9.572694,19.13386,29.97900,39.58229);
var i_of_orbit = new Array(7.0047,3.3947,0.0006,1.8494,1.3038,2.4860,0.7718,1.7717,17.1561);
var l_of_a_node = new Array(48.3247,76.6664,176.1,49.5390,100.5105,113.6244,73.8714,131.7862,110.2639);
var ang_at_1au = new Array(6.74,16.92,0.0,9.36,196.74,165.6,65.8,62.2,8.2);

var planet_dec = new Array(9);
var planet_ra = new Array(9); 
var planet_rah = new Array(9); 
var planet_dist = new Array(9);
var planet_phase = new Array(9);
var planet_size = new Array(9);
var planet_alt = new Array(9);
var planet_az = new Array(9);

var jd, D, Ne, Me, lambda_sun, l, delta, v, R, L, V, E, delta, count;
var i, indx, Np, Mp, r, x, y, x1, y1, phi, lambda, beta, obl, dec, ra;
var t0, gt, st, lat, lng, height, rho_sin_lat, rho_cos_lat, hour_ang, alt, az, dist, phase, size;

var moon_days, Days, N, M_sun, Ec, lambdasun, l0, P0, N0, i_m, e_m;
var l_m, M_m, N_m, Ev, Ae, A3, A4, lambda_moon, beta_moon, age;

var tm_as_str, ut_hrs, ut_mns, part_day, d_of_w, dow_str;

tm_as_str = window.orrery.ut_h_m;
ut_hrs = eval(tm_as_str.substring(0,2));
ut_mns = eval(tm_as_str.substring(3,5));
part_day = ut_hrs / 24.0 + ut_mns / 1440.0;

jd = julian_date() + part_day;

window.orrery.julian_date = jd;

d_of_w = floor((jd - part_day + 1.5) % 7);

if (d_of_w == 0) dow_str = "Sunday";
if (d_of_w == 1) dow_str = "Monday";
if (d_of_w == 2) dow_str = "Tuesday";
if (d_of_w == 3) dow_str = "Wednesday";
if (d_of_w == 4) dow_str = "Thursday";
if (d_of_w == 5) dow_str = "Friday";
if (d_of_w == 6) dow_str = "Saturday";

window.orrery.day_txt = dow_str;

D = jd + 1.1 / 1440 - 2453240.5;

Ne = proper_ang(360 * D / (365.2442 * Tp[2]));
Me = proper_ang(Ne + long_at_e[2] - l_of_p[2]);

v = kepler(e_of_orbit[2],Me / RAD);
L = proper_ang_rad(v + l_of_p[2] / RAD);
R = sma_of_orbit[2] * (1 - pow(e_of_orbit[2],2)) / (1 + e_of_orbit[2] * cos(v));

t0 = (julian_date() - 2415020.0) / 36525;
gt = 0.276919398 + 100.0021359 * t0 + 1.075E-6 * pow(t0,2);
st = proper_ang_rad((gt - floor(gt)) * 2 * PI + (ut_hrs + ut_mns / 60) * 0.26251617);

lat = window.orrery.latitude / RAD;
lng = window.orrery.longitude / RAD;
height = 10.0;

obl = 23.4387 / RAD;

lambda_sun = proper_ang_rad(L + PI);

dec = asin(sin(obl) * sin(lambda_sun));
y = sin(lambda_sun) * cos(obl);
x = cos(lambda_sun);
ra = proper_ang_rad(atan2(y,x));
dist = R;
size = 31.9877 / dist;

hour_ang = proper_ang_rad(st - lng - ra);
alt = asin(sin(dec) * sin(lat) + cos(dec) * cos(lat) * cos(hour_ang));
az = acos((sin(dec) - sin(lat) * sin(alt)) / (cos(lat) * cos(alt)));
if (sin(hour_ang) >= 0) az = 2 * PI - az;

planet_dec[8] = "";
planet_ra[8] = "";
planet_rah[8] = "";
planet_dist[8] = "";
planet_size[8] = "";
planet_phase[8] = " ---";
planet_alt[8] = "";
planet_az[8] = "";

dec = dec * RAD;
ra = ra * RAD / 15;
alt = alt * RAD;
az = az * RAD;

planet_az[8] = az;

if (alt >= 0)
{
alt += 1.2 / (alt + 2);
}
else
{
alt += 1.2 / (abs(alt) + 2);
}

x = round_10(abs(dec));
if (dec < 0)
{
planet_dec[8] += "-";
}
else
{
planet_dec[8] += "+";
}
if (x < 10) planet_dec[8] += "0";
planet_dec[8] += x;

planet_ra[8] = ra;

x = floor(ra);
y = floor((ra - x) * 60 + 0.5);
if (y == 60)
{
x += 1;
y = 0;
}
if (x < 10) planet_rah[8] += "0";
planet_rah[8] += x + "h";
if (y < 10) planet_rah[8] += "0";
planet_rah[8] += y + "m";

dist = round_100(dist);
if (dist < 10)
planet_dist[8] += "0";
planet_dist[8] += dist;

size = round_10(size);
planet_size[8] += size + "\'";

x = round_10(abs(alt));
if (alt < 0)
{
planet_alt[8] += "-";
}
else
{
planet_alt[8] += "+";
}
if (x < 10) planet_alt[8] += "0";
planet_alt[8] += x;

moon_days = 29.5306;
Days = jd + 1.1 / 1440 - 2444238.5;
N = proper_ang(Days / 1.01456167);
M_sun = proper_ang(N - 3.762863);
Ec = 1.91574168 * sin(M_sun / RAD)
lambdasun = proper_ang(N + Ec + 278.83354);
l0 = 64.975464;
P0 = 349.383063;
N0 = 151.950429;
i_m = 5.145396;
e_m = 0.0549;
l_m = proper_ang(13.1763966 * Days + l0);
M_m = proper_ang(l_m - 0.111404 * Days - P0);
N_m = proper_ang(N0 - 0.0529539 * Days);
Ev = 1.2739 * sin((2 * (l_m - lambdasun) - M_m) / RAD);
Ae = 0.1858 * sin(M_sun / RAD);
A3 = 0.37 * sin(M_sun / RAD);
M_m += Ev - Ae - A3;
Ec = 6.2886 * sin(M_m / RAD);
dist = round_100((1 - pow(e_m,2)) / (1 + e_m * cos((M_m + Ec) / RAD)) * 238855.7);
A4 = 0.214 * sin(2 * M_m / RAD);
l_m += Ev + Ec - Ae + A4;
l_m += 0.6583 * sin(2 * (l_m - lambdasun) / RAD);
N_m -= 0.16 * sin(M_sun / RAD);

y = sin((l_m - N_m) / RAD) * cos(i_m / RAD);
x = cos((l_m - N_m) / RAD);
lambda_moon = proper_ang_rad(atan2(y,x) + N_m / RAD);
beta_moon = asin(sin((l_m - N_m) / RAD) * sin(i_m / RAD));

dec = asin(sin(beta_moon) * cos(obl) + cos(beta_moon) * sin(obl) * sin(lambda_moon));
y = sin(lambda_moon) * cos(obl) - tan(beta_moon) * sin(obl);
x = cos(lambda_moon);
ra = proper_ang_rad(atan2(y,x));

x = ra;
y = dec;
dec += (9.7156e-5 * cos(x)) * Days / 365.25;
ra += (2.2355e-4 + 9.7156e-5 * sin(x) * tan(y)) * Days / 365.25;

size = 2160 / dist * RAD * 60;
x = proper_ang(l_m - lambdasun);
phase = 50.0 * (1.0 - cos(x / RAD));
age = round_10(x / 360.0 * moon_days);

x = atan(0.996647 * tan(lat));
rho_sin_lat = 0.996647 * sin(x) + height * sin(lat) / 6378140;
rho_cos_lat = cos(x) + height * cos(lat) / 6378140;
r = dist / 3963.2;
hour_ang = proper_ang_rad(st - lng - ra);
x = atan(rho_cos_lat * sin(hour_ang) / (r * cos(dec) - rho_cos_lat * cos(hour_ang)));
ra -= x;
y = hour_ang;
hour_ang += x;
dec = atan(cos(hour_ang) * (r * sin(dec) - rho_sin_lat) / (r * cos(dec) * cos(y) - rho_cos_lat));

hour_ang = proper_ang_rad(st - lng - ra);
alt = asin(sin(dec) * sin(lat) + cos(dec) * cos(lat) * cos(hour_ang));
az = acos((sin(dec) - sin(lat) * sin(alt)) / (cos(lat) * cos(alt)));
if (sin(hour_ang) >= 0) az = 2 * PI - az;

planet_dec[9] = "";
planet_ra[9] = "";
planet_rah[9] = "";
planet_dist[9] = "";
planet_phase[9] = "";
planet_size[9] = "";
planet_alt[9] = "";
planet_az[9] = "";

dec = dec * RAD;
ra = ra * RAD / 15;
alt = alt * RAD;
az = az * RAD;

planet_az[9] = az;

if (alt >= 0)
{
alt += 1.2 / (alt + 2);
}
else
{
alt += 1.2 / (abs(alt) + 2);
}

x = round_10(abs(dec));
if (dec < 0)
{
planet_dec[9] += "-";
}
else
{
planet_dec[9] += "+";
}
if (x < 10) planet_dec[9] += "0";
planet_dec[9] += x;

planet_ra[9] = ra;

x = floor(ra);
y = floor((ra - x) * 60 + 0.5);
if (y == 60)
{
x += 1;
y = 0;
}
if (x < 10) planet_rah[9] += "0";
planet_rah[9] += x + "h";
if (y < 10) planet_rah[9] += "0";
planet_rah[9] += y + "m";

if (age < 10)
planet_dist[9] += "0";
planet_dist[9] += age + "d";

size = round_10(size);
planet_size[9] += size + "\'";

phase = floor(phase + 0.5);
if (phase < 100)
planet_phase[9] += "0";
if (phase < 10)
planet_phase[9] += "0";
planet_phase[9] += phase + "%";

x = round_10(abs(alt));
if (alt < 0)
{
planet_alt[9] += "-";
}
else
{
planet_alt[9] += "+";
}
if (x < 10) planet_alt[9] += "0";
planet_alt[9] += x;

for (i=0; i<8; i++)
{
indx = i;
if (i > 1) indx += 1;

Np = proper_ang(360 * D / (365.2422 * Tp[indx]));
Mp = proper_ang(Np + long_at_e[indx] - l_of_p[indx]);

V = kepler(e_of_orbit[indx],Mp / RAD);
l = proper_ang_rad(V + l_of_p[indx] / RAD);
r = sma_of_orbit[indx] * (1 - pow(e_of_orbit[indx],2)) / (1 + e_of_orbit[indx] * cos(V));

y = sin(l - l_of_a_node[indx] / RAD);
x = cos(l - l_of_a_node[indx] / RAD);
phi = asin(y * sin(i_of_orbit[indx] / RAD));
y1 = y * cos(i_of_orbit[indx] / RAD);
l = proper_ang_rad(atan2(y1,x) + l_of_a_node[indx] / RAD);
r = r * cos(phi);

if (i < 2)
{
y = r * sin(L - l);
x = R - r * cos(L - l);
lambda = proper_ang_rad(PI + L + atan2(y,x));
}
else
{
y = R * sin(l - L);
x = r - R * cos(l - L);
lambda = proper_ang_rad(atan2(y,x) + l);
}

y = r * tan(phi) * sin(lambda - l);
x = R * sin(l - L);
beta = atan(y / x);

dec = asin(sin(beta) * cos(obl) + cos(beta) * sin(obl) * sin(lambda));
y = sin(lambda) * cos(obl) - tan(beta) * sin(obl);
x = cos(lambda);
ra = proper_ang_rad(atan2(y,x));
dist = abs(sqrt(pow(R,2) + pow(r,2) - 2 * R * r * cos(l - L)) / cos(beta));
size = ang_at_1au[indx] / dist;
phase = 50 * (1 + cos(lambda - l));

hour_ang = proper_ang_rad(st - lng - ra);
alt = asin(sin(dec) * sin(lat) + cos(dec) * cos(lat) * cos(hour_ang));
az = acos((sin(dec) - sin(lat) * sin(alt)) / (cos(lat) * cos(alt)));
if (sin(hour_ang) >= 0) az = 2 * PI - az;

planet_dec[i] = "";
planet_ra[i] = "";
planet_rah[i] = "";
planet_dist[i] = "";
planet_size[i] = "";
planet_phase[i] = "";
planet_alt[i] = "";
planet_az[i] = "";

dec = dec * RAD;
ra = ra * RAD / 15;
alt = alt * RAD;
az = az * RAD;

planet_az[i] = az;

if (alt >= 0)
{
alt += 1.2 / (alt + 2);
}
else
{
alt += 1.2 / (abs(alt) + 2);
}

x = round_10(abs(dec));
if (dec < 0)
{
planet_dec[i] += "-";
}
else
{
planet_dec[i] += "+";
}
if (x < 10) planet_dec[i] += "0";
planet_dec[i] += x;

planet_ra[i] = ra;

x = floor(ra);
y = floor((ra - x) * 60 + 0.5);
if (y == 60)
{
x += 1;
y = 0;
}
if (x < 10) planet_rah[i] += "0";
planet_rah[i] += x + "h";
if (y < 10) planet_rah[i] += "0";
planet_rah[i] += y + "m";

dist = round_100(dist);
if (dist < 10)
planet_dist[i] += "0";
planet_dist[i] += dist;

size = round_10(size);
if (size < 10)
planet_size[i] += "0";
planet_size[i] += size;

phase = floor(phase + 0.5);
if (phase < 100)
planet_phase[i] += "0";
if (phase < 10)
planet_phase[i] += "0";
planet_phase[i] += phase + "%";

x = round_10(abs(alt));
if (alt < 0)
{
planet_alt[i] += "-";
}
else
{
planet_alt[i] += "+";
}
if (x < 10) planet_alt[i] += "0";
planet_alt[i] += x;

}

window.orrery.ra0 = planet_ra[0];
window.orrery.rah0 = planet_rah[0];
window.orrery.dec0 = planet_dec[0];
window.orrery.dist0 = planet_dist[0];
window.orrery.size0 = planet_size[0];
window.orrery.phase0 = planet_phase[0];
window.orrery.alt0 = planet_alt[0];
window.orrery.az0 = planet_az[0];

window.orrery.ra1 = planet_ra[1];
window.orrery.rah1 = planet_rah[1];
window.orrery.dec1 = planet_dec[1];
window.orrery.dist1 = planet_dist[1];
window.orrery.size1 = planet_size[1];
window.orrery.phase1 = planet_phase[1];
window.orrery.alt1 = planet_alt[1];
window.orrery.az1 = planet_az[1];

window.orrery.ra2 = planet_ra[2];
window.orrery.rah2 = planet_rah[2];
window.orrery.dec2 = planet_dec[2];
window.orrery.dist2 = planet_dist[2];
window.orrery.size2 = planet_size[2];
window.orrery.phase2 = planet_phase[2];
window.orrery.alt2 = planet_alt[2];
window.orrery.az2 = planet_az[2];

window.orrery.ra3 = planet_ra[3];
window.orrery.rah3 = planet_rah[3];
window.orrery.dec3 = planet_dec[3];
window.orrery.dist3 = planet_dist[3];
window.orrery.size3 = planet_size[3];
window.orrery.phase3 = planet_phase[3];
window.orrery.alt3 = planet_alt[3];
window.orrery.az3 = planet_az[3];

window.orrery.ra4 = planet_ra[4];
window.orrery.rah4 = planet_rah[4];
window.orrery.dec4 = planet_dec[4];
window.orrery.dist4 = planet_dist[4];
window.orrery.size4 = planet_size[4];
window.orrery.phase4 = planet_phase[4];
window.orrery.alt4 = planet_alt[4];
window.orrery.az4 = planet_az[4];

window.orrery.ra5 = planet_ra[5];
window.orrery.rah5 = planet_rah[5];
window.orrery.dec5 = planet_dec[5];
window.orrery.dist5 = planet_dist[5];
window.orrery.size5 = planet_size[5];
window.orrery.phase5 = planet_phase[5];
window.orrery.alt5 = planet_alt[5];
window.orrery.az5 = planet_az[5];

window.orrery.ra6 = planet_ra[6];
window.orrery.rah6 = planet_rah[6];
window.orrery.dec6 = planet_dec[6];
window.orrery.dist6 = planet_dist[6];
window.orrery.size6 = planet_size[6];
window.orrery.phase6 = planet_phase[6];
window.orrery.alt6 = planet_alt[6];
window.orrery.az6 = planet_az[6];

window.orrery.ra7 = planet_ra[7];
window.orrery.rah7 = planet_rah[7];
window.orrery.dec7 = planet_dec[7];
window.orrery.dist7 = planet_dist[7];
window.orrery.size7 = planet_size[7];
window.orrery.phase7 = planet_phase[7];
window.orrery.alt7 = planet_alt[7];
window.orrery.az7 = planet_az[7];

window.orrery.ra8 = planet_ra[8];
window.orrery.rah8 = planet_rah[8];
window.orrery.dec8 = planet_dec[8];
window.orrery.dist8 = planet_dist[8];
window.orrery.size8 = planet_size[8];
window.orrery.phase8 = planet_phase[8];
window.orrery.alt8 = planet_alt[8];
window.orrery.az8 = planet_az[8];

window.orrery.ra9 = planet_ra[9];
window.orrery.rah9 = planet_rah[9];
window.orrery.dec9 = planet_dec[9];
window.orrery.dist9 = planet_dist[9];
window.orrery.size9 = planet_size[9];
window.orrery.phase9 = planet_phase[9];
window.orrery.alt9 = planet_alt[9];
window.orrery.az9 = planet_az[9];

}
}