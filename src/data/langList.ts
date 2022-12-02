export interface List {
  name: string
  extensions: string[]
}

const langList: List[] = [
  {
    name: '1C Enterprise',
    extensions: ['bsl', 'os'],
  },
  {
    name: '4D',
    extensions: ['4dm'],
  },
  {
    name: 'ABAP',
    extensions: ['abap'],
  },
  {
    name: 'ABNF',
    extensions: ['abnf'],
  },
  {
    name: 'AGS Script',
    extensions: ['asc', 'ash'],
  },
  {
    name: 'AMPL',
    extensions: ['ampl', 'mod'],
  },
  {
    name: 'ANTLR',
    extensions: ['g4'],
  },
  {
    name: 'API Blueprint',
    extensions: ['apib'],
  },
  {
    name: 'APL',
    extensions: ['apl', 'dyalog'],
  },
  {
    name: 'ASL',
    extensions: ['asl', 'dsl'],
  },
  {
    name: 'ASP',
    extensions: ['asp', 'asax', 'ascx', 'ashx', 'asmx', 'aspx', 'axd'],
  },
  {
    name: 'ATS',
    extensions: ['dats', 'hats', 'sats'],
  },
  {
    name: 'ActionScript',
    extensions: ['as'],
  },
  {
    name: 'Ada',
    extensions: ['adb', 'ada', 'ads'],
  },
  {
    name: 'Agda',
    extensions: ['agda'],
  },
  {
    name: 'Alloy',
    extensions: ['als'],
  },
  {
    name: 'AngelScript',
    extensions: ['as', 'angelscript'],
  },
  {
    name: 'Apache Conf',
    extensions: ['apacheconf', 'vhost'],
  },
  {
    name: 'Apex',
    extensions: ['cls'],
  },
  {
    name: 'Apollo Guidance Computer',
    extensions: ['agc'],
  },
  {
    name: 'AppleScript',
    extensions: ['applescript', 'scpt'],
  },
  {
    name: 'Arc',
    extensions: ['arc'],
  },
  {
    name: 'AspectJ',
    extensions: ['aj'],
  },
  {
    name: 'Assembly',
    extensions: ['asm', 'a51', 'nasm'],
  },
  {
    name: 'Asymptote',
    extensions: ['asy'],
  },
  {
    name: 'Augeas',
    extensions: ['aug'],
  },
  {
    name: 'AutoHotkey',
    extensions: ['ahk', 'ahkl'],
  },
  {
    name: 'AutoIt',
    extensions: ['au3'],
  },
  {
    name: 'Awk',
    extensions: ['awk', 'auk', 'gawk', 'mawk', 'nawk'],
  },
  {
    name: 'Ballerina',
    extensions: ['bal'],
  },
  {
    name: 'Batchfile',
    extensions: ['bat', 'cmd'],
  },
  {
    name: 'Befunge',
    extensions: ['befunge'],
  },
  {
    name: 'BibTeX',
    extensions: ['bib', 'bibtex'],
  },
  {
    name: 'Bison',
    extensions: ['bison'],
  },
  {
    name: 'BitBake',
    extensions: ['bb'],
  },
  {
    name: 'Blade',
    extensions: ['blade', 'blade.php'],
  },
  {
    name: 'Blitz Basic',
    extensions: ['bb', 'decls'],
  },
  {
    name: 'Blitz Max',
    extensions: ['bmx'],
  },
  {
    name: 'Bluespec',
    extensions: ['bsv'],
  },
  {
    name: 'Boo',
    extensions: ['boo'],
  },
  {
    name: 'Brainfuck',
    extensions: ['b', 'bf'],
  },
  {
    name: 'Brightscript',
    extensions: ['brs'],
  },
  {
    name: 'C',
    extensions: ['c', 'cats', 'h', 'idc'],
  },
  {
    name: 'C#',
    extensions: ['cs', 'cake', 'csx', 'linq'],
  },
  {
    name: 'C++',
    extensions: [
      'cpp',
      'c++',
      'cc',
      'cp',
      'cxx',
      'h',
      'h++',
      'hh',
      'hpp',
      'hxx',
      'inl',
      'ino',
      'ipp',
      're',
      'tcc',
      'tpp',
    ],
  },
  {
    name: 'CLIPS',
    extensions: ['clp'],
  },
  {
    name: 'CMake',
    extensions: ['cmake', 'cmake.in'],
  },
  {
    name: 'COBOL',
    extensions: ['cob', 'cbl', 'ccp', 'cobol', 'cpy'],
  },
  {
    name: 'COLLADA',
    extensions: ['dae'],
  },
  {
    name: 'CSON',
    extensions: ['cson'],
  },
  {
    name: 'CSS',
    extensions: ['css'],
  },
  {
    name: 'CSV',
    extensions: ['csv'],
  },
  {
    name: 'CWeb',
    extensions: ['w'],
  },
  {
    name: "Cap'n Proto",
    extensions: ['capnp'],
  },
  {
    name: 'CartoCSS',
    extensions: ['mss'],
  },
  {
    name: 'Ceylon',
    extensions: ['ceylon'],
  },
  {
    name: 'Chapel',
    extensions: ['chpl'],
  },
  {
    name: 'Charity',
    extensions: ['ch'],
  },
  {
    name: 'ChucK',
    extensions: ['ck'],
  },
  {
    name: 'Cirru',
    extensions: ['cirru'],
  },
  {
    name: 'Clarion',
    extensions: ['clw'],
  },
  {
    name: 'Clean',
    extensions: ['icl', 'dcl'],
  },
  {
    name: 'Cilk',
    extensions: ['c', 'c++'],
  },
  {
    name: 'Clojure',
    extensions: [
      'clj',
      'boot',
      'cl2',
      'cljc',
      'cljs',
      'cljs.hl',
      'cljscm',
      'cljx',
      'hic',
    ],
  },
  {
    name: 'Closure Templates',
    extensions: ['soy'],
  },
  {
    name: 'CodeQL',
    extensions: ['ql', 'qll'],
  },
  {
    name: 'CoffeeScript',
    extensions: ['coffee', '_coffee', 'cake', 'iced'],
  },
  {
    name: 'ColdFusion',
    extensions: ['cfm', 'cfml'],
  },
  {
    name: 'ColdFusion CFC',
    extensions: ['cfc'],
  },
  {
    name: 'Common Lisp',
    extensions: ['lisp', 'asd', 'cl', 'l', 'lsp', 'ny', 'podsl', 'sexp'],
  },
  {
    name: 'Common Workflow Language',
    extensions: ['cwl'],
  },
  {
    name: 'Component Pascal',
    extensions: ['cp', 'cps'],
  },
  {
    name: 'Cool',
    extensions: ['cl'],
  },
  {
    name: 'Coq',
    extensions: ['coq', 'v'],
  },
  {
    name: 'Crystal',
    extensions: ['cr'],
  },
  {
    name: 'Csound',
    extensions: ['orc', 'udo'],
  },
  {
    name: 'Csound Document',
    extensions: ['csd'],
  },
  {
    name: 'Csound Score',
    extensions: ['sco'],
  },
  {
    name: 'Cuda',
    extensions: ['cu', 'cuh'],
  },
  {
    name: 'Cycript',
    extensions: ['cy'],
  },
  {
    name: 'Cython',
    extensions: ['pyx', 'pxd', 'pxi'],
  },
  {
    name: 'D',
    extensions: ['d', 'di'],
  },
  {
    name: 'DIGITAL Command Language',
    extensions: ['com'],
  },
  {
    name: 'DM',
    extensions: ['dm'],
  },
  {
    name: 'DTrace',
    extensions: ['d'],
  },
  {
    name: 'Dafny CFC',
    extensions: ['dfy'],
  },
  {
    name: 'Dart',
    extensions: ['dart'],
  },
  {
    name: 'DataWeave',
    extensions: ['dwl'],
  },
  {
    name: 'Dhall',
    extensions: ['dhall'],
  },
  {
    name: 'Diff',
    extensions: ['diff', 'patch'],
  },
  {
    name: 'Dockerfile',
    extensions: ['dockerfile'],
  },
  {
    name: 'Dogescript',
    extensions: ['djs'],
  },
  {
    name: 'Dylan',
    extensions: ['dylan', 'dyl', 'intr', 'lid'],
  },
  {
    name: 'E',
    extensions: ['E'],
  },
  {
    name: 'EBNF',
    extensions: ['ebnf'],
  },
  {
    name: 'ECL',
    extensions: ['ecl', 'eclxml'],
  },
  {
    name: 'ECLiPSe',
    extensions: ['ecl'],
  },
  {
    name: 'EJS',
    extensions: ['ejs'],
  },
  {
    name: 'EQ',
    extensions: ['eq'],
  },
  {
    name: 'Eagle',
    extensions: ['sch', 'brd'],
  },
  {
    name: 'Easybuild',
    extensions: ['eb'],
  },
  {
    name: 'Eiffel',
    extensions: ['e'],
  },
  {
    name: 'Elixir',
    extensions: ['ex', 'exs'],
  },
  {
    name: 'Elm',
    extensions: ['elm'],
  },
  {
    name: 'Emacs Lisp',
    extensions: ['el', 'emacs', 'emacs.desktop'],
  },
  {
    name: 'Erlang',
    extensions: ['erl', 'app.src', 'es', 'escript', 'hrl', 'xrl', 'yrl'],
  },
  {
    name: 'F#',
    extensions: ['fs', 'fsi', 'fsx'],
  },
  {
    name: 'F*',
    extensions: ['fst'],
  },
  {
    name: 'FLUX',
    extensions: ['fx', 'flux'],
  },
  {
    name: 'Factor',
    extensions: ['factor'],
  },
  {
    name: 'Fancy',
    extensions: ['fy', 'fancypack'],
  },
  {
    name: 'Fantom',
    extensions: ['fan'],
  },
  {
    name: 'Faust',
    extensions: ['dsp'],
  },
  {
    name: 'Filebench WML',
    extensions: ['f'],
  },
  {
    name: 'Filterscript',
    extensions: ['fs'],
  },
  {
    name: 'Formatted',
    extensions: ['for', 'eam.fs'],
  },
  {
    name: 'Forth',
    extensions: ['fth', '4th', 'f', 'for', 'forth', 'fr', 'frt', 'fs'],
  },
  {
    name: 'Fortran',
    extensions: ['f', 'f77', 'for', 'fpp'],
  },
  {
    name: 'Fortran Free Form',
    extensions: ['f90', 'f03', 'f08', 'f95'],
  },
  {
    name: 'FreeMarker',
    extensions: ['ftl'],
  },
  {
    name: 'Frege',
    extensions: ['fr'],
  },
  {
    name: 'Futhark',
    extensions: ['fut'],
  },
  {
    name: 'G-code',
    extensions: ['g', 'cnc', 'gco', 'gcode'],
  },
  {
    name: 'GAML',
    extensions: ['gaml'],
  },
  {
    name: 'GAMS',
    extensions: ['gms'],
  },
  {
    name: 'GAP',
    extensions: ['g', 'gap', 'gd', 'gi', 'tst'],
  },
  {
    name: 'Markdown',
    extensions: ['md'],
  },
  {
    name: 'GDB',
    extensions: ['gdb', 'gdbinit'],
  },
  {
    name: 'GDScript',
    extensions: ['gd'],
  },
  {
    name: 'GEDCOM',
    extensions: ['ged'],
  },
  {
    name: 'GLSL',
    extensions: [
      'glsl',
      'fp',
      'frag',
      'frg',
      'fs',
      'fsh',
      'fshader',
      'geo',
      'geom',
      'glslf',
      'glslv',
      'gs',
      'gshader',
      'shader',
      'tesc',
      'tese',
      'vert',
      'vrx',
      'vsh',
      'vshader',
    ],
  },
  {
    name: 'GN',
    extensions: ['gn', 'gni'],
  },
  {
    name: 'Game Maker Language',
    extensions: ['gml'],
  },
  {
    name: 'Genie',
    extensions: ['gs'],
  },
  {
    name: 'Genshi',
    extensions: ['kid'],
  },
  {
    name: 'Gentoo Ebuild',
    extensions: ['ebuild'],
  },
  {
    name: 'Gentoo Eclass',
    extensions: ['eclass'],
  },
  {
    name: 'Gherkin',
    extensions: ['feature'],
  },
  {
    name: 'Glyph',
    extensions: ['glf'],
  },
  {
    name: 'Gnuplot',
    extensions: ['gp', 'gnu', 'gnuplot', 'p', 'plot', 'plt'],
  },
  {
    name: 'Go',
    extensions: ['go'],
  },
  {
    name: 'Golo',
    extensions: ['golo'],
  },
  {
    name: 'Gosu',
    extensions: ['gs', 'gst', 'gsx', 'vark'],
  },
  {
    name: 'Grace',
    extensions: ['grace'],
  },
  {
    name: 'Gradle',
    extensions: ['gradle'],
  },
  {
    name: 'Grammatical Framework',
    extensions: ['gf'],
  },
  {
    name: 'GraphQL',
    extensions: ['graphql', 'gql', 'graphqls'],
  },
  {
    name: 'Groovy',
    extensions: ['groovy', 'grt', 'gtpl', 'gvy'],
  },
  {
    name: 'Groovy Server Pages',
    extensions: ['gsp'],
  },
  {
    name: 'HAProxy',
    extensions: ['cfg'],
  },
  {
    name: 'HCL',
    extensions: ['hcl', 'tf', 'tfvars', 'workflow'],
  },
  {
    name: 'HLSL',
    extensions: ['hlsl', 'cginc', 'fx', 'fxh', 'hlsli'],
  },
  {
    name: 'HTML',
    extensions: ['html', 'htm', 'html.hl', 'st', 'xht', 'xhtml'],
  },
  {
    name: 'HTML+Django',
    extensions: ['jinja', 'jinja2', 'mustache', 'njk'],
  },
  {
    name: 'HTML+ECR',
    extensions: ['ecr'],
  },
  {
    name: 'HTML+EEX',
    extensions: ['eex'],
  },
  {
    name: 'HTML+ERB',
    extensions: ['erb', 'erb.deface', 'rhtml'],
  },
  {
    name: 'HTML+PHP',
    extensions: ['phtml'],
  },
  {
    name: 'HTML+Razor',
    extensions: ['cshtml', 'razor'],
  },
  {
    name: 'HTTP',
    extensions: ['http'],
  },
  {
    name: 'HXML',
    extensions: ['hxml'],
  },
  {
    name: 'Hack',
    extensions: ['hack', 'hh', 'hhi', 'php'],
  },
  {
    name: 'Haml',
    extensions: ['haml', 'haml.deface'],
  },
  {
    name: 'Handlebars',
    extensions: ['handlebars', 'hbs'],
  },
  {
    name: 'Harbour',
    extensions: ['hb'],
  },
  {
    name: 'Haskell',
    extensions: ['hs', 'hs-boot', 'hsc'],
  },
  {
    name: 'Haxe',
    extensions: ['hx', 'hxsl'],
  },
  {
    name: 'HiveQL',
    extensions: ['q', 'hql'],
  },
  {
    name: 'HolyC',
    extensions: ['hc'],
  },
  {
    name: 'Hy',
    extensions: ['hy'],
  },
  {
    name: 'HyPhy',
    extensions: ['bf'],
  },
  {
    name: 'IDL',
    extensions: ['pro', 'dlm'],
  },
  {
    name: 'IGOR Pro',
    extensions: ['ipf'],
  },
  {
    name: 'INI',
    extensions: [
      'ini',
      'cfg',
      'dof',
      'lektorproject',
      'prefs',
      'pro',
      'properties',
    ],
  },
  {
    name: 'Idris',
    extensions: ['idr', 'lidr'],
  },
  {
    name: 'Inform 7',
    extensions: ['ni', 'i7x'],
  },
  {
    name: 'Inno Setup',
    extensions: ['iss', 'isl'],
  },
  {
    name: 'Io',
    extensions: ['io'],
  },
  {
    name: 'Ioke',
    extensions: ['ik'],
  },
  {
    name: 'Isabelle',
    extensions: ['thy'],
  },
  {
    name: 'J',
    extensions: ['ijs'],
  },
  {
    name: 'JFlex',
    extensions: ['flex', 'jflex'],
  },
  {
    name: 'JSON',
    extensions: [
      'json',
      'avsc',
      'geojson',
      'gltf',
      'har',
      'ice',
      'JSON-tmLanguage',
      'jsonl',
      'mcmeta',
      'tfstate',
      'tfstate.backup',
      'topojson',
      'webapp',
      'webmanifest',
      'yy',
      'yyp',
    ],
  },
  {
    name: 'JSON5',
    extensions: ['json5'],
  },
  {
    name: 'JSONLD',
    extensions: ['jsonld'],
  },
  {
    name: 'JSONiq',
    extensions: ['jq'],
  },
  {
    name: 'Jasmine',
    extensions: ['j'],
  },
  {
    name: 'Java',
    extensions: ['java'],
  },
  {
    name: 'Java Server Pages',
    extensions: ['jsp'],
  },
  {
    name: 'JavaScript',
    extensions: [
      'js',
      'cjs',
      'mjs',
      'jsx',
      'cjsx',
      'mjsx',
      '_js',
      'bones',
      'es',
      'es6',
      'frag',
      'gs',
      'jake',
      'jsb',
      'jscad',
      'jsfl',
      'jsm',
      'jss',
      'njs',
      'pac',
      'sjs',
      'ssjs',
      'xsjs',
      'xsjslib',
    ],
  },
  {
    name: 'JavaScript+ERB',
    extensions: ['js.erb'],
  },
  {
    name: 'WebAssembly',
    extensions: ['wasm'],
  },
  {
    name: 'Jison',
    extensions: ['jison'],
  },
  {
    name: 'Jison-Lex',
    extensions: ['jisonlex'],
  },
  {
    name: 'Jolie',
    extensions: ['ol', 'iol'],
  },
  {
    name: 'Jsonnet',
    extensions: ['jsonnet', 'libsonnet'],
  },
  {
    name: 'Julia',
    extensions: ['jl'],
  },
  {
    name: 'Jupyter Notebook',
    extensions: ['ipynb'],
  },
  {
    name: 'KRL',
    extensions: ['krl'],
  },
  {
    name: 'Kaitai Struct',
    extensions: ['ksy'],
  },
  {
    name: 'Kit',
    extensions: ['kit'],
  },
  {
    name: 'Kotlin',
    extensions: ['kt', 'ktm', 'kts'],
  },
  {
    name: 'LFE',
    extensions: ['lfe'],
  },
  {
    name: 'LLVM',
    extensions: ['ll'],
  },
  {
    name: 'LOLCODE',
    extensions: ['lol'],
  },
  {
    name: 'LSL',
    extensions: ['lsl', 'lslp'],
  },
  {
    name: 'LabVIEW',
    extensions: ['lvproj'],
  },
  {
    name: 'Lasso',
    extensions: ['lasso', 'las', 'lasso8', 'lasso9'],
  },
  {
    name: 'Latte',
    extensions: ['latte'],
  },
  {
    name: 'Lean',
    extensions: ['lean', 'hlean'],
  },
  {
    name: 'Less',
    extensions: ['less'],
  },
  {
    name: 'Lex',
    extensions: ['l', 'lex'],
  },
  {
    name: 'LilyPond',
    extensions: ['ly', 'ily'],
  },
  {
    name: 'Limbo',
    extensions: ['b', 'm'],
  },
  {
    name: 'Liquid',
    extensions: ['liquid'],
  },
  {
    name: 'Literate Agda',
    extensions: ['lagda'],
  },
  {
    name: 'Literate CoffeeScript',
    extensions: ['litcoffee'],
  },
  {
    name: 'Literate Haskell',
    extensions: ['lhs'],
  },
  {
    name: 'Live Script',
    extensions: ['ls', '_ls'],
  },
  {
    name: 'Logos',
    extensions: ['xm', 'x', 'xi'],
  },
  {
    name: 'Logtalk',
    extensions: ['lgt', 'logtalk'],
  },
  {
    name: 'LookML',
    extensions: ['lookml', 'model.lkml', 'view.lkml'],
  },
  {
    name: 'LoomScript',
    extensions: ['ls'],
  },
  {
    name: 'Lua',
    extensions: [
      'lua',
      'fcgi',
      'nse',
      'p8',
      'pd_lua',
      'rbxs',
      'rockspec',
      'wlua',
    ],
  },
  {
    name: 'M',
    extensions: ['mumps', 'm'],
  },
  {
    name: 'M4',
    extensions: ['m4'],
  },
  {
    name: 'M4Sugar',
    extensions: ['m4'],
  },
  {
    name: 'MATLAB',
    extensions: ['matlab', 'm'],
  },
  {
    name: 'MAXScript',
    extensions: ['ms', 'mcr'],
  },
  {
    name: 'MLIR',
    extensions: ['mlir'],
  },
  {
    name: 'MQL4',
    extensions: ['mq4', 'mqh'],
  },
  {
    name: 'MQL5',
    extensions: ['mq5', 'mqh'],
  },
  {
    name: 'MTML',
    extensions: ['mtml'],
  },
  {
    name: 'MUF',
    extensions: ['muf', 'm'],
  },
  {
    name: 'Macaulay2',
    extensions: ['m2'],
  },
  {
    name: 'Makefile',
    extensions: ['mak', 'd', 'make', 'mk', 'mkfile'],
  },
  {
    name: 'Mako',
    extensions: ['mako', 'mao'],
  },
  {
    name: 'Marko',
    extensions: ['marko'],
  },
  {
    name: 'Mask',
    extensions: ['mask'],
  },
  {
    name: 'Mathematica',
    extensions: [
      'mathematica',
      'cdf',
      'm',
      'ma',
      'mt',
      'nb',
      'nbp',
      'wl',
      'wlt',
    ],
  },
  {
    name: 'Max',
    extensions: ['maxpat', 'maxhelp', 'maxproj', 'mxt', 'pat'],
  },
  {
    name: 'Mercury',
    extensions: ['m', 'moo'],
  },
  {
    name: 'Metal',
    extensions: ['metal'],
  },
  {
    name: 'MiniD',
    extensions: ['minid'],
  },
  {
    name: 'Mirah',
    extensions: ['druby', 'duby', 'mirah'],
  },
  {
    name: 'Modelica',
    extensions: ['mo'],
  },
  {
    name: 'Modula-2',
    extensions: ['mod'],
  },
  {
    name: 'Modula-3',
    extensions: ['i3', 'ig', 'm3', 'mg'],
  },
  {
    name: 'Module Management System',
    extensions: ['mms', 'mmk'],
  },
  {
    name: 'Monkey',
    extensions: ['monkey', 'monkey2'],
  },
  {
    name: 'Moocode',
    extensions: ['moo'],
  },
  {
    name: 'MoonScript',
    extensions: ['moon'],
  },
  {
    name: 'Motorola 68K Assembly',
    extensions: ['asm', 's', 'x68'],
  },
  {
    name: 'Myghty',
    extensions: ['myt'],
  },
  {
    name: 'NASL',
    extensions: ['nasl'],
  },
  {
    name: 'NCL',
    extensions: ['ncl'],
  },
  {
    name: 'NEON',
    extensions: ['neon'],
  },
  {
    name: 'NL',
    extensions: ['nl'],
  },
  {
    name: 'NSIS',
    extensions: ['nsi', 'nsh'],
  },
  {
    name: 'Nearley',
    extensions: ['ne', 'nearley'],
  },
  {
    name: 'Nemerle',
    extensions: ['n'],
  },
  {
    name: 'NetLinx',
    extensions: ['axs', 'axi'],
  },
  {
    name: 'NetLinx+ERB',
    extensions: ['axs.erb', 'axi.erb'],
  },
  {
    name: 'NetLogo',
    extensions: ['nlogo'],
  },
  {
    name: 'NewLisp',
    extensions: ['nl', 'lisp', 'lsp'],
  },
  {
    name: 'Nextflow',
    extensions: ['nf'],
  },
  {
    name: 'Nginx',
    extensions: ['nginxconf', 'vhost'],
  },
  {
    name: 'Nim',
    extensions: ['nim', 'nim.cfg', 'nimble', 'nimrod', 'nims'],
  },
  {
    name: 'Ninja',
    extensions: ['ninja'],
  },
  {
    name: 'Nit',
    extensions: ['nit'],
  },
  {
    name: 'Nix',
    extensions: ['nix'],
  },
  {
    name: 'Nu',
    extensions: ['nu'],
  },
  {
    name: 'NumPy',
    extensions: ['numpy', 'numpyw', 'numsc'],
  },
  {
    name: 'OCaml',
    extensions: ['ml', 'eliom', 'eliomi', 'ml4', 'mli', 'mll', 'mly'],
  },
  {
    name: 'ObjDump',
    extensions: ['objdump'],
  },
  {
    name: 'ObjectScript',
    extensions: ['cls'],
  },
  {
    name: 'Objective-C',
    extensions: ['m', 'h'],
  },
  {
    name: 'Objective-C++',
    extensions: ['mm'],
  },
  {
    name: 'Objective-J',
    extensions: ['j', 'sj'],
  },
  {
    name: 'Odin',
    extensions: ['odin'],
  },
  {
    name: 'Omgrofl',
    extensions: ['omgrofl'],
  },
  {
    name: 'Opa',
    extensions: ['opa'],
  },
  {
    name: 'Opal',
    extensions: ['opal'],
  },
  {
    name: 'Open Policy Agent',
    extensions: ['rego'],
  },
  {
    name: 'OpenCL',
    extensions: ['cl', 'opencl'],
  },
  {
    name: 'OpenEdge ABL',
    extensions: ['p', 'cls', 'w'],
  },
  {
    name: 'OpenQASM',
    extensions: ['qasm'],
  },
  {
    name: 'OpenSCAD',
    extensions: ['scad'],
  },
  {
    name: 'Ox',
    extensions: ['ox', 'oxh', 'oxo'],
  },
  {
    name: 'Oxygene',
    extensions: ['oxygene'],
  },
  {
    name: 'Oz',
    extensions: ['oz'],
  },
  {
    name: 'P4',
    extensions: ['p4'],
  },
  {
    name: 'PHP',
    extensions: [
      'php',
      'aw',
      'ctp',
      'fcgi',
      'php3',
      'php4',
      'php5',
      'phps',
      'phpt',
    ],
  },
  {
    name: 'PL/SQL',
    extensions: [
      'pls',
      'bdy',
      'ddl',
      'fnc',
      'pck',
      'pkb',
      'pks',
      'plb',
      'plsql',
      'prc',
      'spc',
      'sql',
      'tpb',
      'tps',
      'trg',
      'vw',
    ],
  },
  {
    name: 'PLpgSQL',
    extensions: ['pgsql', 'sql'],
  },
  {
    name: 'POV-Ray SDL',
    extensions: ['pov'],
  },
  {
    name: 'Pan',
    extensions: ['pan'],
  },
  {
    name: 'Papyrus',
    extensions: ['psc'],
  },
  {
    name: 'Parrot',
    extensions: ['parrot'],
  },
  {
    name: 'Parrot Assembly',
    extensions: ['pasm'],
  },
  {
    name: 'Parrot Internal Representation',
    extensions: ['pir'],
  },
  {
    name: 'Pascal',
    extensions: ['pas', 'dfm', 'dpr', 'lpr', 'pascal', 'pp'],
  },
  {
    name: 'Pawn',
    extensions: ['pwn', 'sma'],
  },
  {
    name: 'Pep8',
    extensions: ['pep'],
  },
  {
    name: 'Perl',
    extensions: [
      'pl',
      'al',
      'cgi',
      'fcgi',
      'perl',
      'ph',
      'plx',
      'pm',
      'psgi',
      't',
    ],
  },
  {
    name: 'Pic',
    extensions: ['pic', 'chem'],
  },
  {
    name: 'Pickle',
    extensions: ['pkl'],
  },
  {
    name: 'PicoLisp',
    extensions: ['l'],
  },
  {
    name: 'PigLatin',
    extensions: ['pig'],
  },
  {
    name: 'Pike',
    extensions: ['pike', 'pmod'],
  },
  {
    name: 'PlantUML',
    extensions: ['puml', 'iuml', 'plantuml'],
  },
  {
    name: 'PogoScript',
    extensions: ['pogo'],
  },
  {
    name: 'Pony',
    extensions: ['pony'],
  },
  {
    name: 'PostCSS',
    extensions: ['pcss', 'postcss'],
  },
  {
    name: 'PostScript',
    extensions: ['ps', 'eps', 'epsi', 'pfa'],
  },
  {
    name: 'PowerBuilder',
    extensions: ['pbt', 'sra', 'sru', 'srw'],
  },
  {
    name: 'PowerShell',
    extensions: ['ps1', 'psd1', 'psm1'],
  },
  {
    name: 'Prisma',
    extensions: ['prisma'],
  },
  {
    name: 'Processing',
    extensions: ['pde'],
  },
  {
    name: 'Proguard',
    extensions: ['pro'],
  },
  {
    name: 'Prolog',
    extensions: ['pl', 'pro', 'prolog', 'yap'],
  },
  {
    name: 'Propeller Spin',
    extensions: ['spin'],
  },
  {
    name: 'Pug',
    extensions: ['jade', 'pug'],
  },
  {
    name: 'Puppet',
    extensions: ['pp'],
  },
  {
    name: 'PureBasic',
    extensions: ['pb', 'pbi'],
  },
  {
    name: 'PureScript',
    extensions: ['purs'],
  },
  {
    name: 'Python',
    extensions: [
      'py',
      'cgi',
      'fcgi',
      'gyp',
      'gypi',
      'lmi',
      'py3',
      'pyde',
      'pyi',
      'pyp',
      'pyt',
      'pyw',
      'rpy',
      'smk',
      'spec',
      'tac',
      'wsgi',
      'xpy',
    ],
  },
  {
    name: 'Q#',
    extensions: ['qs'],
  },
  {
    name: 'QML',
    extensions: ['qml', 'qbs'],
  },
  {
    name: 'QMake',
    extensions: ['pro', 'pri'],
  },
  {
    name: 'Qt Script',
    extensions: ['qs'],
  },
  {
    name: 'R',
    extensions: ['r', 'rd', 'rsx'],
  },
  {
    name: 'RAML',
    extensions: ['raml'],
  },
  {
    name: 'REALbasic',
    extensions: ['rbbas', 'rbfrm', 'rbmnu', 'rbres', 'rbtbar', 'rbuistate'],
  },
  {
    name: 'REXX',
    extensions: ['rexx', 'pprx', 'rex'],
  },
  {
    name: 'RPC',
    extensions: ['x'],
  },
  {
    name: 'RUNOFF',
    extensions: ['rnh', 'rno'],
  },
  {
    name: 'Racket',
    extensions: ['rkt', 'rktd', 'rktl', 'scrbl'],
  },
  {
    name: 'Ragel',
    extensions: ['rl'],
  },
  {
    name: 'Raku',
    extensions: [
      '6pl',
      '6pm',
      'nqp',
      'p6',
      'p6l',
      'p6m',
      'pl',
      'pl6',
      'pm',
      'pm6',
      't',
    ],
  },
  {
    name: 'Rascal',
    extensions: ['rsc'],
  },
  {
    name: 'Reason',
    extensions: ['re', 'rei'],
  },
  {
    name: 'Rebol',
    extensions: ['reb', 'r', 'r2', 'r3', 'rebol'],
  },
  {
    name: 'Red',
    extensions: ['red', 'reds'],
  },
  {
    name: 'Redcode',
    extensions: ['cw'],
  },
  {
    name: "Ren'Py",
    extensions: ['rpy'],
  },
  {
    name: 'RenderScript',
    extensions: ['rs', 'rsh'],
  },
  {
    name: 'Rich Text Format',
    extensions: ['rtf'],
  },
  {
    name: 'Ring',
    extensions: ['ring'],
  },
  {
    name: 'Riot',
    extensions: ['riot'],
  },
  {
    name: 'RobotFramework',
    extensions: ['robot'],
  },
  {
    name: 'Roff',
    extensions: [
      'roff',
      '1',
      '1in',
      '1m',
      '1x',
      '2',
      '3',
      '3in',
      '3m',
      '3p',
      '3pm',
      '3qt',
      '3x',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'l',
      'man',
      'mdoc',
      'me',
      'ms',
      'n',
      'nr',
      'rno',
      'tmac',
    ],
  },
  {
    name: 'Roff Manpage',
    extensions: [
      '1',
      '1in',
      '1m',
      '1x',
      '2',
      '3',
      '3in',
      '3m',
      '3p',
      '3pm',
      '3qt',
      '3x',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'man',
      'mdoc',
    ],
  },
  {
    name: 'Rouge',
    extensions: ['rg'],
  },
  {
    name: 'Ruby',
    extensions: [
      'rb',
      'builder',
      'eye',
      'fcgi',
      'gemspec',
      'god',
      'jbuilder',
      'mspec',
      'pluginspec',
      'podspec',
      'rabl',
      'rake',
      'rbi',
      'rbuild',
      'rbw',
      'rbx',
      'ru',
      'ruby',
      'spec',
      'thor',
      'watchr',
    ],
  },
  {
    name: 'Rust',
    extensions: ['rs', 'rs.in'],
  },
  {
    name: 'SAS',
    extensions: ['sas'],
  },
  {
    name: 'SCSS',
    extensions: ['scss'],
  },
  {
    name: 'SMT',
    extensions: ['smt2', 'smt'],
  },
  {
    name: 'SPARQL',
    extensions: ['sparql', 'rq'],
  },
  {
    name: 'SQF',
    extensions: ['sqf', 'hqf'],
  },
  {
    name: 'SQL',
    extensions: ['sql', 'cql', 'ddl', 'mysql', 'prc', 'tab', 'udf', 'viw'],
  },
  {
    name: 'SQLPL',
    extensions: ['sql', 'db2'],
  },
  {
    name: 'SRecode Template',
    extensions: ['srt'],
  },
  {
    name: 'STON',
    extensions: ['ston'],
  },
  {
    name: 'SVG',
    extensions: ['svg'],
  },
  {
    name: 'Sage',
    extensions: ['sage', 'sagews'],
  },
  {
    name: 'SaltStack',
    extensions: ['sls'],
  },
  {
    name: 'Sass',
    extensions: ['sass'],
  },
  {
    name: 'Scala',
    extensions: ['scala', 'kojo', 'sbt', 'sc'],
  },
  {
    name: 'Scaml',
    extensions: ['scaml'],
  },
  {
    name: 'Scheme',
    extensions: ['scm', 'sch', 'sld', 'sls', 'sps', 'ss'],
  },
  {
    name: 'Scilab',
    extensions: ['sci', 'sce', 'tst'],
  },
  {
    name: 'Self',
    extensions: ['self'],
  },
  {
    name: 'ShaderLab',
    extensions: ['shader'],
  },
  {
    name: 'Shell',
    extensions: [
      'sh',
      'bash',
      'bats',
      'cgi',
      'command',
      'env',
      'fcgi',
      'ksh',
      'sh.in',
      'tmux',
      'tool',
      'zsh',
    ],
  },
  {
    name: 'ShellSession',
    extensions: ['sh-session'],
  },
  {
    name: 'Shen',
    extensions: ['shen'],
  },
  {
    name: 'Sieve',
    extensions: ['sieve'],
  },
  {
    name: 'Slash',
    extensions: ['sl'],
  },
  {
    name: 'Slice',
    extensions: ['ice'],
  },
  {
    name: 'Slim',
    extensions: ['slim'],
  },
  {
    name: 'SmPL',
    extensions: ['cocci'],
  },
  {
    name: 'Smali',
    extensions: ['smali'],
  },
  {
    name: 'Smalltalk',
    extensions: ['st', 'cs'],
  },
  {
    name: 'Smarty',
    extensions: ['tpl'],
  },
  {
    name: 'SourcePawn',
    extensions: ['sp'],
  },
  {
    name: 'Squirrel',
    extensions: ['nut'],
  },
  {
    name: 'Stan',
    extensions: ['stan'],
  },
  {
    name: 'Standard ML',
    extensions: ['ML', 'fun', 'sig', 'sml'],
  },
  {
    name: 'Starlark',
    extensions: ['bzl'],
  },
  {
    name: 'Stata',
    extensions: ['do', 'ado', 'doh', 'ihlp', 'mata', 'matah', 'sthlp'],
  },
  {
    name: 'Stylus',
    extensions: ['styl'],
  },
  {
    name: 'SugarSS',
    extensions: ['sss'],
  },
  {
    name: 'SuperCollider',
    extensions: ['sc', 'scd'],
  },
  {
    name: 'Svelte',
    extensions: ['svelte'],
  },
  {
    name: 'Swift',
    extensions: ['swift'],
  },
  {
    name: 'SystemVerilog',
    extensions: ['sv', 'svh', 'vh'],
  },
  {
    name: 'TI Program',
    extensions: ['8xp', '8xk', '8xk.txt', '8xp.txt'],
  },
  {
    name: 'TLA',
    extensions: ['tla'],
  },
  {
    name: 'TOML',
    extensions: ['toml'],
  },
  {
    name: 'TSQL',
    extensions: ['sql'],
  },
  {
    name: 'TXL',
    extensions: ['txl'],
  },
  {
    name: 'Tcl',
    extensions: ['tcl', 'adp', 'tm'],
  },
  {
    name: 'Tcsh',
    extensions: ['tcsh', 'csh'],
  },
  {
    name: 'TeX',
    extensions: [
      'tex',
      'aux',
      'bbx',
      'cbx',
      'cls',
      'dtx',
      'ins',
      'lbx',
      'ltx',
      'mkii',
      'mkiv',
      'mkvi',
      'sty',
      'toc',
    ],
  },
  {
    name: 'Tea',
    extensions: ['tea'],
  },
  {
    name: 'Terra',
    extensions: ['t'],
  },
  {
    name: 'Thrift',
    extensions: ['thrift'],
  },
  {
    name: 'Turing',
    extensions: ['t', 'tu'],
  },
  {
    name: 'Turtle',
    extensions: ['ttl'],
  },
  {
    name: 'Twig',
    extensions: ['twig'],
  },
  {
    name: 'TypeScript',
    extensions: ['ts', 'tsx', 'cts', 'ctsx', 'mts', 'mtsx'],
  },
  {
    name: 'Unified Parallel C',
    extensions: ['upc'],
  },
  {
    name: 'Unix Assembly',
    extensions: ['s', 'ms'],
  },
  {
    name: 'Uno',
    extensions: ['uno'],
  },
  {
    name: 'UnrealScript',
    extensions: ['uc'],
  },
  {
    name: 'UrWeb',
    extensions: ['ur', 'urs'],
  },
  {
    name: 'V',
    extensions: ['v'],
  },
  {
    name: 'VBA',
    extensions: ['bas', 'cls', 'frm', 'frx', 'vba'],
  },
  {
    name: 'VBScript',
    extensions: ['vbs'],
  },
  {
    name: 'VCL',
    extensions: ['vcl'],
  },
  {
    name: 'VHDL',
    extensions: ['vhdl', 'vhd', 'vhf', 'vhi', 'vho', 'vhs', 'vht', 'vhw'],
  },
  {
    name: 'Vala',
    extensions: ['vala', 'vapi'],
  },
  {
    name: 'Verilog',
    extensions: ['v', 'veo'],
  },
  {
    name: 'Vim Snippet',
    extensions: ['snip', 'snippet', 'snippets'],
  },
  {
    name: 'Vim script',
    extensions: ['vim', 'vba', 'vmb'],
  },
  {
    name: 'Visual Basic .NET',
    extensions: ['vb', 'vbhtml'],
  },
  {
    name: 'Volt',
    extensions: ['volt'],
  },
  {
    name: 'Vue',
    extensions: ['vue'],
  },
  {
    name: 'WebAssembly',
    extensions: ['wast', 'wat'],
  },
  {
    name: 'WebIDL',
    extensions: ['webidl'],
  },
  {
    name: 'WebVTT',
    extensions: ['vtt'],
  },
  {
    name: 'Wollok',
    extensions: ['wlk'],
  },
  {
    name: 'X10',
    extensions: ['x10'],
  },
  {
    name: 'XC',
    extensions: ['xc'],
  },
  {
    name: 'XML',
    extensions: [
      'xml',
      'adml',
      'admx',
      'ant',
      'axml',
      'builds',
      'ccproj',
      'ccxml',
      'clixml',
      'cproject',
      'cscfg',
      'csdef',
      'csl',
      'csproj',
      'ct',
      'depproj',
      'dita',
      'ditamap',
      'ditaval',
      'dll.config',
      'dotsettings',
      'filters',
      'fsproj',
      'fxml',
      'glade',
      'gml',
      'gmx',
      'grxml',
      'iml',
      'ivy',
      'jelly',
      'jsproj',
      'kml',
      'launch',
      'mdpolicy',
      'mjml',
      'mm',
      'mod',
      'mxml',
      'natvis',
      'ncl',
      'ndproj',
      'nproj',
      'nuspec',
      'odd',
      'osm',
      'pkgproj',
      'pluginspec',
      'proj',
      'props',
      'ps1xml',
      'psc1',
      'pt',
      'rdf',
      'resx',
      'rss',
      'sch',
      'scxml',
      'sfproj',
      'shproj',
      'srdf',
      'storyboard',
      'sublime-snippet',
      'targets',
      'tml',
      'ui',
      'ux',
      'urdf',
      'vbproj',
      'vcxproj',
      'vsixmanifest',
      'vssettings',
      'vstemplate',
      'vxml',
      'wixproj',
      'workflow',
      'wsdl',
      'wsf',
      'wxi',
      'wxl',
      'wxs',
      'x3d',
      'xacro',
      'xaml',
      'xib',
      'xlf',
      'xliff',
      'xmi',
      'xml.dist',
      'xproj',
      'xsd',
      'xspec',
      'xul',
      'zcml',
    ],
  },
  {
    name: 'XPages',
    extensions: ['xsp-config', 'xsp.metadata'],
  },
  {
    name: 'XProc',
    extensions: ['xpl', 'xproc'],
  },
  {
    name: 'XQuery',
    extensions: ['xquery', 'xq', 'xql', 'xqm', 'xqy'],
  },
  {
    name: 'XS',
    extensions: ['xs'],
  },
  {
    name: 'XSLT',
    extensions: ['xslt', 'xsl'],
  },
  {
    name: 'Xojo',
    extensions: [
      'xojo_code',
      'xojo_menu',
      'xojo_report',
      'xojo_script',
      'xojo_toolbar',
      'xojo_window',
    ],
  },
  {
    name: 'Xtend',
    extensions: ['xtend'],
  },
  {
    name: 'YAML',
    extensions: [
      'yml',
      'mir',
      'reek',
      'rviz',
      'sublime-syntax',
      'syntax',
      'yaml',
      'yaml-tmlanguage',
      'yaml.sed',
      'yml.mysql',
    ],
  },
  {
    name: 'YANG',
    extensions: ['yang'],
  },
  {
    name: 'YARA',
    extensions: ['yar', 'yara'],
  },
  {
    name: 'YASnippet',
    extensions: ['yasnippet'],
  },
  {
    name: 'Yacc',
    extensions: ['y', 'yacc', 'yy'],
  },
  {
    name: 'ZAP',
    extensions: ['zap', 'xzap'],
  },
  {
    name: 'ZIL',
    extensions: ['zil', 'mud'],
  },
  {
    name: 'Zeek',
    extensions: ['zeek', 'bro'],
  },
  {
    name: 'ZenScript',
    extensions: ['zs'],
  },
  {
    name: 'Zephir',
    extensions: ['zep'],
  },
  {
    name: 'Zig',
    extensions: ['zig'],
  },
  {
    name: 'Zimpl',
    extensions: ['zimpl', 'zmpl', 'zpl'],
  },
  {
    name: 'Desktop',
    extensions: ['desktop', 'desktop.in'],
  },
  {
    name: 'Dircolors',
    extensions: ['dircolors'],
  },
  {
    name: 'EC',
    extensions: ['ec', 'eh'],
  },
  {
    name: 'Edn',
    extensions: ['edn'],
  },
  {
    name: 'Fish',
    extensions: ['fish'],
  },
  {
    name: 'MIRC Script',
    extensions: ['mrc'],
  },
  {
    name: 'Mcfunction',
    extensions: ['mcfunction'],
  },
  {
    name: 'Mupad',
    extensions: ['mu'],
  },
  {
    name: 'Nanorc',
    extensions: ['nanorc'],
  },
  {
    name: 'NesC',
    extensions: ['nc'],
  },
  {
    name: 'Ooc',
    extensions: ['ooc'],
  },
  {
    name: 'Q',
    extensions: ['q'],
  },
  {
    name: 'Sed',
    extensions: ['sed'],
  },
  {
    name: 'Wdl',
    extensions: ['wdl'],
  },
  {
    name: 'Wisp',
    extensions: ['wisp'],
  },
  {
    name: 'XBase',
    extensions: ['prg', 'ch', 'prw'],
  },
]

export const langExtList: any = {}
langList.forEach(({ extensions }, index) => {
  extensions.forEach((ext) => {
    langExtList[ext] = index
  })
})

export default langList
