export function getMode(name: string): string {
  return 'ace/mode/' + (modes[name] || 'text')
}

const modes: {
  [key: string]: string
} = {
  // !--------------------------------------
  // ! A
  // !--------------------------------------

  abap: 'abap',
  'sap-abap': 'abap',
  /* ------------------------------------- */
  abc: 'abc',
  /* ------------------------------------- */
  actionscript: 'actionscript',
  as: 'actionscript',
  /* ------------------------------------- */
  ada: 'ada',
  alda: 'alda',
  /* ------------------------------------- */
  apache: 'apache_conf',
  apacheconf: 'apache_conf',
  apache_conf: 'apache_conf',
  /* ------------------------------------- */
  apex: 'apex',
  /* ------------------------------------- */
  applescript: 'applescript',
  oascript: 'applescript',
  /* ------------------------------------- */
  aql: 'aql',
  /* ------------------------------------- */
  arduino: 'c_cpp',
  ino: 'cpp',
  /* ------------------------------------- */
  armasm: 'assembly_x86',
  arm: 'assembly_x86',
  /* ------------------------------------- */
  asl: 'asl',
  /* ------------------------------------- */
  asciidoc: 'asciidoc',
  adoc: 'asciidoc',
  /* ------------------------------------- */
  aspectj: 'java',
  /* ------------------------------------- */
  autohotkey: 'autohotkey',
  ahk: 'autohotkey',
  /* ------------------------------------- */
  avrasm: 'assembly_x86',
  asm: 'assembly_x86',

  // !--------------------------------------
  // ! B
  // !--------------------------------------

  bash: 'sh',
  sh: 'sh',
  /* ------------------------------------- */
  basic: 'vbscript',

  // !--------------------------------------
  // ! C
  // !--------------------------------------

  c: 'c_cpp',
  h: 'c_pp',
  /* ------------------------------------- */
  c9search: 'c9search',
  /* ------------------------------------- */
  cirru: 'cirru',
  /* ------------------------------------- */
  clojure: 'clojure',
  clj: 'clojure',
  edn: 'clojure',
  /* ------------------------------------- */
  cmake: 'makefile',
  'cmake.in': 'makefile',
  /* ------------------------------------- */
  cobol: 'cobol',
  /* ------------------------------------- */
  coffeescript: 'coffee',
  coffee: 'coffee',
  cson: 'coffee',
  iced: 'coffee',
  /* ------------------------------------- */
  coldfusion: 'coldfusion',
  /* ------------------------------------- */
  cpp: 'c_cpp',
  cc: 'c_cpp',
  'c++': 'c_cpp',
  'h++': 'c_cpp',
  hpp: 'c_cpp',
  hh: 'c_cpp',
  hxx: 'c_cpp',
  cxx: 'c_cpp',
  /* ------------------------------------- */
  crmsh: 'sh',
  crm: 'sh',
  pcmk: 'sh',
  /* ------------------------------------- */
  crystal: 'crystal',
  cr: 'crystal',
  /* ------------------------------------- */
  csharp: 'csharp',
  cs: 'csharp',
  'c#': 'csharp',
  /* ------------------------------------- */
  csound_document: 'csound_document',
  csound_orchestra: 'csound_orchestra',
  csound_score: 'csound_score',
  /* ------------------------------------- */
  csp: 'csp',
  /* ------------------------------------- */
  css: 'css',
  /* ------------------------------------- */
  curly: 'curly',

  // !--------------------------------------
  // ! D
  // !--------------------------------------

  d: 'd',
  /* ------------------------------------- */
  dart: 'dart',
  /* ------------------------------------- */
  delphi: 'pascal',
  dpr: 'pascal',
  dfm: 'pascal',
  pas: 'pascal',
  pascal: 'pascal',
  /* ------------------------------------- */
  diff: 'diff',
  patch: 'diff',
  /* ------------------------------------- */
  django: 'django',
  jinja: 'django',
  /* ------------------------------------- */
  dockerfile: 'dockerfile',
  docker: 'dockerfile',
  /* ------------------------------------- */
  dos: 'batchfile',
  bat: 'batchfile',
  cmd: 'batchfile',
  batchfile: 'batchfile',
  /* ------------------------------------- */
  drools: 'drools',
  /* ------------------------------------- */
  dot: 'dot',

  // !--------------------------------------
  // ! E
  // !--------------------------------------

  edifact: 'edifact',
  /* ------------------------------------- */
  eiffel: 'eiffel',
  /* ------------------------------------- */
  ejs: 'ejs',
  /* ------------------------------------- */
  elixir: 'elixir',
  ex: 'elixir',
  exs: 'elixir',
  /* ------------------------------------- */
  elm: 'elm',
  /* ------------------------------------- */
  erlang: 'erlang',
  erl: 'erlang',

  // !--------------------------------------
  // ! F
  // !--------------------------------------

  forth: 'forth',
  /* ------------------------------------- */
  fortran: 'fortran',
  f90: 'fortran',
  f95: 'fortran',
  /* ------------------------------------- */
  fsharp: 'fsharp',
  fs: 'fsharp',
  'f#': 'fsharp',
  /* ------------------------------------- */
  fsl: 'fsl',
  /* ------------------------------------- */
  ftl: 'ftl',

  // !--------------------------------------
  // ! G
  // !--------------------------------------

  gcode: 'gcode',
  nc: 'gcode',
  /* ------------------------------------- */
  gherkin: 'gherkin',
  feature: 'gherkin',
  /* ------------------------------------- */
  gitignore: 'gitignore',
  /* ------------------------------------- */
  glsl: 'glsl',
  /* ------------------------------------- */
  gobstones: 'gobstones',
  /* ------------------------------------- */
  go: 'golang',
  golang: 'golang',
  /* ------------------------------------- */
  graphqlschema: 'graphqlschema',
  /* ------------------------------------- */
  groovy: 'groovy',

  // !--------------------------------------
  // ! H
  // !--------------------------------------

  haml: 'haml',
  /* ------------------------------------- */
  handlebars: 'handlebars',
  hbs: 'handlebars',
  'html.hbs': 'handlebars',
  'html.handlebars': 'handlebars',
  htmlbars: 'handlebars',
  /* ------------------------------------- */
  haskell: 'haskell',
  hs: 'haskell',
  /* ------------------------------------- */
  haskell_cabal: 'haskell_cabal',
  /* ------------------------------------- */
  haxe: 'haxe',
  hx: 'haxe',
  /* ------------------------------------- */
  hjson: 'hjson',
  /* ------------------------------------- */
  html_elixir: 'html_elixir',
  /* ------------------------------------- */
  html_ruby: 'html_ruby',
  /* ------------------------------------- */
  hy: 'lisp',
  hylang: 'lisp',

  // !--------------------------------------
  // ! I
  // !--------------------------------------

  ini: 'ini',
  toml: 'toml',
  /* ------------------------------------- */
  io: 'io',
  ion: 'ion',

  // !--------------------------------------
  // ! J
  // !--------------------------------------

  jack: 'jack',
  /* ------------------------------------- */
  jade: 'jade',
  /* ------------------------------------- */
  java: 'java',
  jsp: 'jsp',
  /* ------------------------------------- */
  javascript: 'javascript',
  js: 'javascript',
  jsx: 'jsx',
  mjs: 'javascript',
  cjs: 'javascript',
  /* ------------------------------------- */
  json: 'json',
  /* ------------------------------------- */
  json5: 'json5',
  /* ------------------------------------- */
  jsoniq: 'jsoniq',
  /* ------------------------------------- */
  jssm: 'jssm',
  /* ------------------------------------- */
  julia: 'julia',

  // !--------------------------------------
  // ! K
  // !--------------------------------------

  kotlin: 'kotlin',
  kot: 'kotlin',
  kt: 'kotlin',
  kts: 'kotlin',

  // !--------------------------------------
  // ! L
  // !--------------------------------------

  latex: 'latex',
  tex: 'tex',
  /* ------------------------------------- */
  latte: 'latte',
  /* ------------------------------------- */
  less: 'less',
  /* ------------------------------------- */
  liquid: 'liquid',
  /* ------------------------------------- */
  lisp: 'lisp',
  /* ------------------------------------- */
  livescript: 'livescript',
  ls: 'livescript',
  /* ------------------------------------- */
  logiql: 'logiql',
  /* ------------------------------------- */
  logtalk: 'logtalk',
  /* ------------------------------------- */
  lsl: 'lsl',
  /* ------------------------------------- */
  lua: 'lua',
  /* ------------------------------------- */
  luapage: 'luapage',
  /* ------------------------------------- */
  lucene: 'lucene',

  // !--------------------------------------
  // ! M
  // !--------------------------------------

  makefile: 'makefile',
  make: 'makefile',
  mak: 'makefile',
  mk: 'makefile',
  /* ------------------------------------- */
  markdown: 'markdown',
  md: 'markdown',
  mkd: 'markdown',
  mkdown: 'markdown',
  /* ------------------------------------- */
  mask: 'mask',
  /* ------------------------------------- */
  matlab: 'matlab',
  /* ------------------------------------- */
  maze: 'maze',
  /* ------------------------------------- */
  mediawiki: 'mediawiki',
  /* ------------------------------------- */
  mel: 'mel',
  /* ------------------------------------- */
  mipsasm: 'mips',
  mips: 'mips',
  /* ------------------------------------- */
  mixal: 'mixal',
  /* ------------------------------------- */
  mushcode: 'mushcode',
  /* ------------------------------------- */
  mysql: 'mysql',

  // !--------------------------------------
  // ! N
  // !--------------------------------------

  nginx: 'nginx',
  nginxconf: 'nginx',
  /* ------------------------------------- */
  nim: 'nim',
  /* ------------------------------------- */
  nix: 'nix',
  nixos: 'nix',
  /* ------------------------------------- */
  nsis: 'nsis',
  /* ------------------------------------- */
  nunjacks: 'nunjacks',

  // !--------------------------------------
  // ! O
  // !--------------------------------------

  objectivec: 'objectivec',
  mm: 'objectivec',
  objc: 'objectivec',
  'obj-c': 'objectivec',
  'obj-c++': 'objectivec',
  'objective-c++': 'objectivec',
  /* ------------------------------------- */
  ml: 'ocaml',
  ocaml: 'ocaml',
  /* ------------------------------------- */
  openscad: 'scad',
  scad: 'scad',

  // !--------------------------------------
  // ! P
  // !--------------------------------------

  perl: 'perl',
  pl: 'perl',
  pm: 'perl',
  /* ------------------------------------- */
  pgsql: 'pgsql',
  postgres: 'pgsql',
  postgresql: 'pgsql',
  /* ------------------------------------- */
  php: 'php',
  /* ------------------------------------- */
  php_laravel_blade: 'php_laravel_blade',
  /* ------------------------------------- */
  pig: 'pig',
  /* ------------------------------------- */
  plain_text: 'plain_text',
  text: 'text',
  txt: 'text',
  /* ------------------------------------- */
  powershell: 'powershell',
  pwsh: 'powershell',
  ps: 'powershell',
  ps1: 'powershell',
  /* ------------------------------------- */
  praat: 'praat',
  /* ------------------------------------- */
  prisma: 'prisma',
  /* ------------------------------------- */
  processing: 'c_cpp',
  pde: 'c_cpp',
  /* ------------------------------------- */
  prolog: 'prolog',
  /* ------------------------------------- */
  properties: 'properties',
  /* ------------------------------------- */
  protobuf: 'protobuf',
  /* ------------------------------------- */
  puppet: 'puppet',
  pp: 'puppet',
  /* ------------------------------------- */
  purebasic: 'vbscript',
  pb: 'vbscript',
  pbi: 'vbscript',
  /* ------------------------------------- */
  python: 'python',
  py: 'python',
  gyp: 'python',
  ipython: 'python',
  /*-------------------------------------- */
  partiql: 'partiql',

  // !--------------------------------------
  // ! Q
  // !--------------------------------------

  qml: 'qml',
  qt: 'qml',

  // !--------------------------------------
  // ! R
  // !--------------------------------------

  r: 'r',
  /* ------------------------------------- */
  raku: 'raku',
  /* ------------------------------------- */
  razor: 'razor',
  /* ------------------------------------- */
  rdoc: 'rdoc',
  /* ------------------------------------- */
  red: 'red',
  /* ------------------------------------- */
  redshift: 'redshift',
  /* ------------------------------------- */
  rhtml: 'rhtml',
  /* ------------------------------------- */
  rst: 'rst',
  rest: 'rst',
  /* ------------------------------------- */
  ruby: 'ruby',
  gemspec: 'ruby',
  irb: 'ruby',
  podspec: 'ruby',
  rb: 'ruby',
  thor: 'ruby',
  /* ------------------------------------- */
  rust: 'rust',
  rs: 'rust',

  // !--------------------------------------
  // ! S
  // !--------------------------------------

  sac: 'sac',
  /* ------------------------------------- */
  sass: 'sass',
  /* ------------------------------------- */
  scala: 'scala',
  /* ------------------------------------- */
  scheme: 'scheme',
  /* ------------------------------------- */
  scss: 'scss',
  /* ------------------------------------- */
  shell: 'sh',
  console: 'sh',
  shellsession: 'sh',
  /* ------------------------------------- */
  sjs: 'sjs',
  /* ------------------------------------- */
  slim: 'slim',
  /* ------------------------------------- */
  smarty: 'smarty',
  /* ------------------------------------- */
  smithy: 'smithy',
  /* ------------------------------------- */
  soy: 'soy',
  /* ------------------------------------- */
  space: 'space',
  /* ------------------------------------- */
  sparql: 'sparql',
  /* ------------------------------------- */
  sql: 'sql',
  /* ------------------------------------- */
  sqlserver: 'sqlserver',
  /* ------------------------------------- */
  stylus: 'stylus',
  styl: 'stylus',
  /* ------------------------------------- */
  swift: 'swift',

  // !--------------------------------------
  // ! T
  // !--------------------------------------

  tcl: 'tcl',
  tk: 'tcl',
  /* ------------------------------------- */
  terraform: 'terraform',
  /* ------------------------------------- */
  textile: 'textile',
  /* ------------------------------------- */
  turtle: 'turtle',
  /* ------------------------------------- */
  twig: 'twig',
  craftcms: 'twig',
  /* ------------------------------------- */
  typescript: 'typescript',
  ts: 'typescript',
  /* ------------------------------------- */
  tsx: 'tsx',

  // !--------------------------------------
  // ! V
  // !--------------------------------------

  vala: 'vala',
  /* ------------------------------------- */
  vbnet: 'vbscript',
  vb: 'vbscript',
  /* ------------------------------------- */
  vbscript: 'vbscript',
  vbs: 'vbscript',
  /* ------------------------------------- */
  velocity: 'velocity',
  /* ------------------------------------- */
  verilog: 'verilog',
  sv: 'verilog',
  svh: 'verilog',
  v: 'verilog',
  /* ------------------------------------- */
  vhdl: 'vhdl',
  /* ------------------------------------- */
  visualforce: 'visualforce',

  // !--------------------------------------
  // ! W
  // !--------------------------------------

  wollok: 'wollok',

  // !--------------------------------------
  // ! X
  // !--------------------------------------

  x86asm: 'assembly_x86',
  /* ------------------------------------- */
  xml: 'xml',
  atom: 'xml',
  html: 'html',
  plist: 'xml',
  rss: 'xml',
  svg: 'svg',
  wsf: 'xml',
  xhtml: 'xml',
  xjb: 'xml',
  xsd: 'xml',
  xsl: 'xml',
  /* ------------------------------------- */
  xquery: 'xquery',
  xpath: 'xquery',
  xq: 'xquery',

  // !--------------------------------------
  // ! Y
  // !--------------------------------------

  yaml: 'yaml',
  yml: 'yaml',

  // !--------------------------------------
  // ! Z
  // !--------------------------------------

  zeek: 'zeek',
}