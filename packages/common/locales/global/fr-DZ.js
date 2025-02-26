/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js

(function(global) {
  global.ng = global.ng || {};
  global.ng.common = global.ng.common || {};
  global.ng.common.locales = global.ng.common.locales || {};
  const u = undefined;
  function plural(n) {
    let i = Math.floor(Math.abs(n));
    if (i === 0 || i === 1) return 1;
    return 5;
  }
  root.ng.common.locales['fr-dz'] = [
    'fr-DZ',
    [['AM', 'PM'], u, u],
    u,
    [
      ['D', 'L', 'M', 'M', 'J', 'V', 'S'], ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
      ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
      ['di', 'lu', 'ma', 'me', 'je', 've', 'sa']
    ],
    u,
    [
      ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      [
        'janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.',
        'déc.'
      ],
      [
        'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre',
        'octobre', 'novembre', 'décembre'
      ]
    ],
    u,
    [['av. J.-C.', 'ap. J.-C.'], u, ['avant Jésus-Christ', 'après Jésus-Christ']],
    6,
    [5, 6],
    ['dd/MM/y', 'd MMM y', 'd MMMM y', 'EEEE d MMMM y'],
    ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
    ['{1} {0}', '{1} \'à\' {0}', u, u],
    [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
    ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'],
    'DA',
    'dinar algérien',
    {
      'ARS': ['$AR', '$'],
      'AUD': ['$AU', '$'],
      'BEF': ['FB'],
      'BMD': ['$BM', '$'],
      'BND': ['$BN', '$'],
      'BSD': ['$BS', '$'],
      'BZD': ['$BZ', '$'],
      'CAD': ['$CA', '$'],
      'CLP': ['$CL', '$'],
      'CNY': [u, '¥'],
      'COP': ['$CO', '$'],
      'CYP': ['£CY'],
      'DZD': ['DA'],
      'EGP': [u, '£E'],
      'FJD': ['$FJ', '$'],
      'FKP': ['£FK', '£'],
      'FRF': ['F'],
      'GBP': ['£GB', '£'],
      'GIP': ['£GI', '£'],
      'HKD': [u, '$'],
      'IEP': ['£IE'],
      'ILP': ['£IL'],
      'ITL': ['₤IT'],
      'JPY': [u, '¥'],
      'KMF': [u, 'FC'],
      'LBP': ['£LB', '£L'],
      'MTP': ['£MT'],
      'MXN': ['$MX', '$'],
      'NAD': ['$NA', '$'],
      'NIO': [u, '$C'],
      'NZD': ['$NZ', '$'],
      'RHD': ['$RH'],
      'RON': [u, 'L'],
      'RWF': [u, 'FR'],
      'SBD': ['$SB', '$'],
      'SGD': ['$SG', '$'],
      'SRD': ['$SR', '$'],
      'TTD': ['$TT', '$'],
      'TWD': [u, 'NT$'],
      'USD': ['$US', '$'],
      'UYU': ['$UY', '$'],
      'WST': ['WS$'],
      'XCD': [u, '$'],
      'XPF': ['FCFP'],
      'ZMW': [u, 'Kw']
    },
    plural,
    [
      [
        ['minuit', 'midi', 'mat.', 'ap.m.', 'soir', 'nuit'], u,
        ['minuit', 'midi', 'du matin', 'de l’après-midi', 'du soir', 'du matin']
      ],
      [
        ['minuit', 'midi', 'mat.', 'ap.m.', 'soir', 'nuit'], u,
        ['minuit', 'midi', 'matin', 'après-midi', 'soir', 'nuit']
      ],
      [
        '00:00', '12:00', ['04:00', '12:00'], ['12:00', '18:00'], ['18:00', '24:00'],
        ['00:00', '04:00']
      ]
    ]
  ];
})(typeof globalThis !== 'undefined' && globalThis || typeof global !== 'undefined' && global ||
   typeof window !== 'undefined' && window);
