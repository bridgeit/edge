
var bodies = [
{name:'Alpheratz', eqcoords:[0.137, 29.067]},
{name:'Caph', eqcoords:[0.15, 59.133]},
{name:'Algenib', eqcoords:[0.218, 15.167]},
{name:'Ankaa', eqcoords:[0.437, -42.333]},
{name:'Schedar', eqcoords:[0.672, 56.517]},
{name:'Diphda', eqcoords:[0.725, -18.017]},
{name:'Mirach', eqcoords:[1.158, 35.6]},
{name:'Ruchbah', eqcoords:[1.427, 60.217]},
{name:'Achernar', eqcoords:[1.625, -57.25]},
{name:'Metallah', eqcoords:[1.882, 29.567]},
{name:'Segin', eqcoords:[1.902, 63.65]},
{name:'Sharatan', eqcoords:[1.908, 20.783]},
{name:'Almaak', eqcoords:[2.062, 42.317]},
{name:'Hamal', eqcoords:[2.117, 23.45]},
{name:'Mira', eqcoords:[2.32, -3.017]},
{name:'Polaris', eqcoords:[2.465, 89.25]},
{name:'Kaffaljidhma', eqcoords:[2.72, 3.233]},
{name:'Acamar', eqcoords:[2.968, -40.333]},
{name:'Menkar', eqcoords:[3.035, 4.067]},
{name:'Algol', eqcoords:[3.133, 40.933]},
{name:'Mirphak', eqcoords:[3.402, 49.833]},
{name:'Alcyone', eqcoords:[3.79, 24.083]},
{name:'Zaurak', eqcoords:[3.965, -13.517]},
{name:'Ain', eqcoords:[4.477, 19.167]},
{name:'Aldebaran', eqcoords:[4.595, 16.5]},
{name:'Hassaleh', eqcoords:[4.828, 6.967]},
{name:'Al Anz', eqcoords:[5.028, 43.833]},
{name:'Hoedus II', eqcoords:[5.105, 41.217]},
{name:'Kursa', eqcoords:[5.128, -5.1]},
{name:'Rigel', eqcoords:[5.245, -8.217]},
{name:'Capella', eqcoords:[5.273, 45.983]},
{name:'Bellatrix', eqcoords:[5.417, 6.333]},
{name:'Alnath', eqcoords:[5.437, 28.6]},
{name:'Mintaka', eqcoords:[5.532, 0.3]},
{name:'Arneb', eqcoords:[5.545, -17.833]},
{name:'Meissa', eqcoords:[5.583, 9.933]},
{name:'Nair al Saif', eqcoords:[5.588, -5.917]},
{name:'Alnilam', eqcoords:[5.602, -1.2]},
{name:'Phaet', eqcoords:[5.658, -34.083]},
{name:'Alnitak', eqcoords:[5.677, -1.95]},
{name:'Saiph', eqcoords:[5.795, -9.667]},
{name:'Wezn', eqcoords:[5.847, -35.767]},
{name:'Betelgeuse', eqcoords:[5.917, 7.4]},
{name:'Menkalinan', eqcoords:[5.988, 44.95]},
{name:'Propus', eqcoords:[6.245, 22.517]},
{name:'Phurud', eqcoords:[6.335, -30.05]},
{name:'Murzim', eqcoords:[6.377, -17.95]},
{name:'Tejat Posterior', eqcoords:[6.38, 22.517]},
{name:'Canopus', eqcoords:[6.397, -52.683]},
{name:'Alhena', eqcoords:[6.625, 16.417]},
{name:'Mebsuta', eqcoords:[6.73, 25.15]},
{name:'Alzirr', eqcoords:[6.752, 12.9]},
{name:'Sirius', eqcoords:[6.752, -16.7]},
{name:'Adara', eqcoords:[6.973, -28.967]},
{name:'Wezen', eqcoords:[7.137, -26.4]},
{name:'HR2748', eqcoords:[7.223, -44.633]},
{name:'Wasat', eqcoords:[7.333, 21.983]},
{name:'Aludra', eqcoords:[7.398, -29.3]},
{name:'Gomeisa', eqcoords:[7.45, 8.3]},
{name:'Castor', eqcoords:[7.573, 31.9]},
{name:'Castor', eqcoords:[7.575, 31.9]},
{name:'Procyon', eqcoords:[7.653, 5.233]},
{name:'Pollux', eqcoords:[7.753, 28.033]},
{name:'Naos', eqcoords:[8.057, -39.983]},
{name:'Suhail al Muhlif', eqcoords:[8.157, -47.317]},
{name:'Altarf', eqcoords:[8.272, 9.2]},
{name:'Avior', eqcoords:[8.373, -59.5]},
{name:'Talitha', eqcoords:[8.983, 48.067]},
{name:'Suhail', eqcoords:[9.13, -43.4]},
{name:'HR3659', eqcoords:[9.182, -58.933]},
{name:'Miaplacidus', eqcoords:[9.22, -69.683]},
{name:'Turais', eqcoords:[9.283, -59.267]},
{name:'Alphard', eqcoords:[9.458, -8.65]},
{name:'HR3803', eqcoords:[9.517, -57.017]},
{name:'Subra', eqcoords:[9.683, 9.9]},
{name:'HR3884', eqcoords:[9.753, -62.5]},
{name:'as Elased Australis', eqcoords:[9.762, 23.783]},
{name:'Regulus', eqcoords:[10.137, 12]},
{name:'Adhafera', eqcoords:[10.275, 23.433]},
{name:'Tania Borealis', eqcoords:[10.283, 42.933]},
{name:'HR4050', eqcoords:[10.282, -61.317]},
{name:'Algieba', eqcoords:[10.33, 19.867]},
{name:'Tania Australis', eqcoords:[10.37, 41.517]},
{name:'HR4140', eqcoords:[10.53, -61.667]},
{name:'Merak', eqcoords:[11.028, 56.4]},
{name:'Dubhe', eqcoords:[11.06, 61.767]},
{name:'Zosma', eqcoords:[11.233, 20.55]},
{name:'Chort', eqcoords:[11.233, 15.45]},
{name:'Alula Borealis', eqcoords:[11.305, 33.117]},
{name:'Denebola', eqcoords:[11.815, 14.6]},
{name:'Phad', eqcoords:[11.895, 53.717]},
{name:'Minkar', eqcoords:[12.167, -22.6]},
{name:'Megrez', eqcoords:[12.255, 57.05]},
{name:'Gienah Ghurab', eqcoords:[12.262, -17.517]},
{name:'Acrux', eqcoords:[12.44, -63.067]},
{name:'Algorab', eqcoords:[12.495, -16.483]},
{name:'Gacrux', eqcoords:[12.517, -57.083]},
{name:'Kraz', eqcoords:[12.57, -23.367]},
{name:'Porrima', eqcoords:[12.692, -1.433]},
{name:'Becrux', eqcoords:[12.793, -59.667]},
{name:'Alioth', eqcoords:[12.9, 56]},
{name:'Auva', eqcoords:[12.923, 3.417]},
{name:'Cor Caroli', eqcoords:[12.932, 38.333]},
{name:'Vindamiatrix', eqcoords:[13.035, 10.983]},
{name:'Mizar', eqcoords:[13.395, 54.967]},
{name:'Spica', eqcoords:[13.417, -11.133]},
{name:'Heze', eqcoords:[13.577, 0.583]},
{name:'Alkaid', eqcoords:[13.787, 49.35]},
{name:'Mufrid', eqcoords:[13.91, 18.417]},
{name:'Hadar', eqcoords:[14.06, -60.35]},
{name:'Menkent', eqcoords:[14.11, -36.35]},
{name:'Arcturus', eqcoords:[14.26, 19.2]},
{name:'Seginus', eqcoords:[14.532, 38.317]},
{name:'Rigil Kentaurus', eqcoords:[14.658, -60.817]},
{name:'Izar', eqcoords:[14.747, 27.083]},
{name:'Zuben Elgenubi', eqcoords:[14.845, -16.017]},
{name:'Kocab', eqcoords:[14.845, 74.183]},
{name:'Nekkar', eqcoords:[15.028, 40.417]},
{name:'Brachium', eqcoords:[15.063, -25.25]},
{name:'Zuben Elschemali', eqcoords:[15.28, -9.367]},
{name:'Pherkad', eqcoords:[15.345, 71.85]},
{name:'Ed Asich', eqcoords:[15.413, 58.983]},
{name:'Alphekka', eqcoords:[15.577, 26.733]},
{name:'Unukalhai', eqcoords:[15.735, 6.433]},
{name:'Dschubba', eqcoords:[16.003, -22.617]},
{name:'Graffias', eqcoords:[16.087, -19.8]},
{name:'Yed Prior', eqcoords:[16.237, -3.683]},
{name:'Yed Posterior', eqcoords:[16.303, -4.683]},
{name:'Antares', eqcoords:[16.488, -26.433]},
{name:'Kornephoros', eqcoords:[16.503, 21.5]},
{name:'Atria', eqcoords:[16.803, -69.033]},
{name:'Aldhibah', eqcoords:[17.147, 65.733]},
{name:'Sabik', eqcoords:[17.17, -15.717]},
{name:'Ras Algethi', eqcoords:[17.243, 14.4]},
{name:'Sarin', eqcoords:[17.248, 24.85]},
{name:'Restaban', eqcoords:[17.505, 52.317]},
{name:'Shaula', eqcoords:[17.557, -37.1]},
{name:'Rasalhague', eqcoords:[17.582, 12.567]},
{name:'Sargas', eqcoords:[17.618, -43]},
{name:'Cebalrai', eqcoords:[17.722, 4.567]},
{name:'HR6630', eqcoords:[17.827, -37.033]},
{name:'Etamin', eqcoords:[17.942, 51.483]},
{name:'Nash', eqcoords:[18.093, -30.417]},
{name:'Kaus Meridionalis', eqcoords:[18.347, -29.833]},
{name:'Kaus Australis', eqcoords:[18.4, -34.383]},
{name:'Kaus Borealis', eqcoords:[18.463, -25.433]},
{name:'Vega', eqcoords:[18.613, 38.767]},
{name:'Sheliak', eqcoords:[18.832, 33.35]},
{name:'Nunki', eqcoords:[18.918, -26.317]},
{name:'Sulaphat', eqcoords:[18.978, 32.683]},
{name:'Ascella', eqcoords:[19.04, -29.883]},
{name:'Albaldah', eqcoords:[19.16, -21.017]},
{name:'Nodus Secundus', eqcoords:[19.21, 67.667]},
{name:'Albireo', eqcoords:[19.508, 27.95]},
{name:'Tarazed', eqcoords:[19.768, 10.6]},
{name:'Altair', eqcoords:[19.845, 8.85]},
{name:'Dabih', eqcoords:[20.347, -14.8]},
{name:'Sadr', eqcoords:[20.367, 40.233]},
{name:'Peacock', eqcoords:[20.423, -56.75]},
{name:'Deneb', eqcoords:[20.688, 45.267]},
{name:'Alderamin', eqcoords:[21.307, 62.567]},
{name:'Alphirk', eqcoords:[21.477, 70.55]},
{name:'Sadalsuud', eqcoords:[21.523, -5.583]},
{name:'Enif', eqcoords:[21.733, 9.85]},
{name:'Sadalmelik', eqcoords:[22.093, 0.333]},
{name:'Al Nair', eqcoords:[22.133, -47]},
{name:'Baham', eqcoords:[22.168, 6.183]},
{name:'Homam', eqcoords:[22.688, 10.817]},
{name:'Matar', eqcoords:[22.713, 30.2]},
{name:'Skat', eqcoords:[22.91, -15.85]},
{name:'Fomalhaut', eqcoords:[22.958, -29.65]},
{name:'Scheat', eqcoords:[23.062, 28.067]},
{name:'Markab', eqcoords:[23.077, 15.183]},
{name:'Alrai', eqcoords:[23.655, 77.6]},
{name:'M110', eqcoords:[0.673, 41.683]},
{name:'M31', eqcoords:[0.697, 41.267]},
{name:'M32', eqcoords:[0.713, 40.867]},
{name:'M72', eqcoords:[20.892, -12.533]},
{name:'M73', eqcoords:[20.983, -12.633]},
{name:'M2', eqcoords:[21.558, 0.817]},
{name:'M38', eqcoords:[5.478, 35.833]},
{name:'M36', eqcoords:[5.602, 34.133]},
{name:'M37', eqcoords:[5.873, 32.55]},
{name:'M30', eqcoords:[21.673, -23.183]},
{name:'M103', eqcoords:[1.553, 60.7]},
{name:'M52', eqcoords:[23.403, 61.583]},
{name:'M77', eqcoords:[2.712, 0.033]},
{name:'M41', eqcoords:[6.783, -20.733]},
{name:'M44', eqcoords:[8.668, 19.983]},
{name:'M67', eqcoords:[8.84, 11.817]},
{name:'M98', eqcoords:[12.232, 14.917]},
{name:'M99', eqcoords:[12.315, 14.433]},
{name:'M100', eqcoords:[12.383, 15.833]},
{name:'M85', eqcoords:[12.425, 18.2]},
{name:'M88', eqcoords:[12.535, 14.433]},
{name:'M91', eqcoords:[12.592, 14.5]},
{name:'M64', eqcoords:[12.945, 21.683]},
{name:'M53', eqcoords:[13.215, 18.167]},
{name:'M106', eqcoords:[12.315, 47.317]},
{name:'M94', eqcoords:[12.848, 41.133]},
{name:'M63', eqcoords:[13.263, 42.033]},
{name:'M51', eqcoords:[13.5, 47.183]},
{name:'M3', eqcoords:[13.703, 28.383]},
{name:'M29', eqcoords:[20.398, 38.533]},
{name:'M39', eqcoords:[21.537, 48.433]},
{name:'M102', eqcoords:[15.108, 55.767]},
{name:'M35', eqcoords:[6.148, 24.333]},
{name:'M13', eqcoords:[16.695, 36.467]},
{name:'M92', eqcoords:[17.285, 43.133]},
{name:'M48', eqcoords:[8.23, -5.8]},
{name:'M68', eqcoords:[12.658, -26.75]},
{name:'M83', eqcoords:[13.617, -29.867]},
{name:'M95', eqcoords:[10.733, 11.7]},
{name:'M96', eqcoords:[10.78, 11.817]},
{name:'M105', eqcoords:[10.797, 12.583]},
{name:'M65', eqcoords:[11.315, 13.083]},
{name:'M66', eqcoords:[11.337, 12.983]},
{name:'M79', eqcoords:[5.408, -24.55]},
{name:'M57', eqcoords:[18.893, 33.033]},
{name:'M56', eqcoords:[19.277, 30.183]},
{name:'M50', eqcoords:[7.053, -8.333]},
{name:'M107', eqcoords:[16.542, -13.05]},
{name:'M12', eqcoords:[16.787, -1.95]},
{name:'M10', eqcoords:[16.952, -4.1]},
{name:'M62', eqcoords:[17.02, -30.117]},
{name:'M19', eqcoords:[17.043, -26.267]},
{name:'M9', eqcoords:[17.32, -18.517]},
{name:'M14', eqcoords:[17.627, -3.25]},
{name:'M43', eqcoords:[5.593, -5.267]},
{name:'M42', eqcoords:[5.59, -5.45]},
{name:'M78', eqcoords:[5.778, 0.05]},
{name:'M15', eqcoords:[21.5, 12.167]},
{name:'M76', eqcoords:[1.707, 51.567]},
{name:'M34', eqcoords:[2.7, 42.783]},
{name:'M74', eqcoords:[1.612, 15.783]},
{name:'M47', eqcoords:[7.61, -14.5]},
{name:'M46', eqcoords:[7.697, -14.817]},
{name:'M93', eqcoords:[7.743, -23.867]},
{name:'M80', eqcoords:[16.283, -22.983]},
{name:'M4', eqcoords:[16.393, -26.533]},
{name:'M6', eqcoords:[17.668, -32.217]},
{name:'M7', eqcoords:[17.898, -34.817]},
{name:'M26', eqcoords:[18.753, -9.4]},
{name:'M11', eqcoords:[18.852, -6.267]},
{name:'M5', eqcoords:[15.31, 2.083]},
{name:'M16', eqcoords:[18.313, -13.783]},
{name:'M71', eqcoords:[19.897, 18.783]},
{name:'M23', eqcoords:[17.947, -19.017]},
{name:'M20', eqcoords:[18.043, -23.033]},
{name:'M8', eqcoords:[18.063, -24.383]},
{name:'M21', eqcoords:[18.077, -22.5]},
{name:'M24', eqcoords:[18.282, -18.5]},
{name:'M18', eqcoords:[18.332, -17.133]},
{name:'M17', eqcoords:[18.347, -16.183]},
{name:'M28', eqcoords:[18.408, -24.867]},
{name:'M69', eqcoords:[18.523, -32.35]},
{name:'M25', eqcoords:[18.527, -19.25]},
{name:'M22', eqcoords:[18.607, -23.9]},
{name:'M70', eqcoords:[18.72, -32.3]},
{name:'M54', eqcoords:[18.918, -30.483]},
{name:'M55', eqcoords:[19.667, -30.967]},
{name:'M75', eqcoords:[20.102, -21.917]},
{name:'M45', eqcoords:[3.783, 24.117]},
{name:'M1', eqcoords:[5.575, 22.017]},
{name:'M33', eqcoords:[1.565, 30.65]},
{name:'M81', eqcoords:[9.927, 69.067]},
{name:'M82', eqcoords:[9.93, 69.683]},
{name:'M108', eqcoords:[11.192, 55.667]},
{name:'M97', eqcoords:[11.247, 55.017]},
{name:'M109', eqcoords:[11.96, 53.383]},
{name:'M40', eqcoords:[12.373, 58.083]},
{name:'M101', eqcoords:[14.053, 54.35]},
{name:'M61', eqcoords:[12.365, 4.467]},
{name:'M84', eqcoords:[12.418, 12.883]},
{name:'M86', eqcoords:[12.437, 12.95]},
{name:'M49', eqcoords:[12.497, 8]},
{name:'M87', eqcoords:[12.513, 12.4]},
{name:'M89', eqcoords:[12.595, 12.55]},
{name:'M90', eqcoords:[12.613, 13.167]},
{name:'M58', eqcoords:[12.628, 11.817]},
{name:'M104', eqcoords:[12.667, -11.617]},
{name:'M59', eqcoords:[12.7, 11.65]},
{name:'M60', eqcoords:[12.728, 11.55]},
{name:'M27', eqcoords:[19.993, 22.717]}
];
