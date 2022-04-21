// TODO:
// OPT directive
// < > brackets on macro parameters
// C Style macros
// Square brackets
// Extern keyword

const binaryOperators = [
  "||",
  "&&",
  choice("==", "!=", "=", "<>"),
  choice("<", ">", ">=", "<="),
  choice("+", "-"),
  choice("*", "/", "%", "//"),
  choice("|", "!"),
  choice("^", "~"),
  "&",
  choice("<<", ">>"),
];

const PREC = {
  unary: binaryOperators.length + 1,
  address: 1,
};

const instructions = [
  "bchg",
  "bclr",
  "bset",
  "btst",
  "lsr",
  "move",
  "tst",
  "moves",
  "wddata",
  "neg",
  "negx",
  "not",
  "or",
  "ori",
  "addq",
  "addi",
  "addx",
  "and",
  "andi",
  "asl",
  "asr",
  "cas",
  "chk2",
  "clr",
  "cmp",
  "cmpi",
  "cmpm",
  "cmp2",
  "eor",
  "eori",
  "rol",
  "ror",
  "roxl",
  "roxr",
  "sub",
  "subi",
  "subq",
  "subx",
  "tbls",
  "tblsn",
  "tblu",
  "tblun",
  "add",
  "lsl",
  "fsincos",
  "ftst",
  "maaac",
  "mac",
  "traplo",
  "masac",
  "trapne",
  "trapeq",
  "movea",
  "movem",
  "traple",
  "movep",
  "movm",
  "msaac",
  "msac",
  "mssac",
  "muls",
  "mulu",
  "pbbs",
  "pbbc",
  "adda",
  "pblc",
  "pbss",
  "pbls",
  "pbsc",
  "pbas",
  "pbac",
  "pbws",
  "pbwc",
  "pbis",
  "pbic",
  "pbgs",
  "pbgc",
  "pbcs",
  "pbcc",
  "cas2",
  "chk",
  "cmpa",
  "ptrapbs",
  "ptrapbc",
  "ptrapls",
  "ptraplc",
  "ptrapss",
  "ptrapsc",
  "ptrapas",
  "ptrapac",
  "ptrapws",
  "ptrapwc",
  "ptrapis",
  "divs",
  "ptrapic",
  "ptrapgs",
  "divu",
  "ptrapgc",
  "ptrapcs",
  "ptrapcc",
  "ext",
  "fbf",
  "fbeq",
  "fbogt",
  "fboge",
  "fbolt",
  "fbole",
  "fbogl",
  "fbor",
  "fbun",
  "fbueq",
  "fbugt",
  "fbuge",
  "fbult",
  "fbule",
  "fbne",
  "fbt",
  "fbsf",
  "fbseq",
  "fbgt",
  "fbge",
  "fblt",
  "fble",
  "fbgl",
  "fbgle",
  "suba",
  "fbngle",
  "fbngl",
  "fbnle",
  "fbnlt",
  "fbnge",
  "fbngt",
  "fbsne",
  "fbst",
  "tpf",
  "trapt",
  "trapf",
  "traphi",
  "trapls",
  "trapcc",
  "traphs",
  "trapcs",
  "trapge",
  "trapmi",
  "trappl",
  "trapvs",
  "trapvc",
  "traplt",
  "link",
  "trapgt",
  "ftrapf",
  "ftrapeq",
  "ftrapogt",
  "ftrapoge",
  "ftrapolt",
  "ftrapole",
  "ftrapogl",
  "ftrapor",
  "ftrapun",
  "ftrapueq",
  "ftrapugt",
  "ftrapuge",
  "ftrapult",
  "ftrapule",
  "ftrapne",
  "ftrapt",
  "ftrapsf",
  "ftrapseq",
  "ftrapgt",
  "ftrapge",
  "ftraplt",
  "ftraple",
  "ftrapgl",
  "ftrapgle",
  "ftrapngle",
  "ftrapngl",
  "ftrapnle",
  "ftrapnlt",
  "ftrapnge",
  "ftrapngt",
  "ftrapsne",
  "ftrapst",
  "move16",
  "unlk",
  "unpk",
  "pack",
  "stop",
  "bfchg",
  "pflush",
  "bfclr",
  "pflusha",
  "bfexts",
  "pflushan",
  "bfextu",
  "pflushn",
  "bfffo",
  "pflushr",
  "bfins",
  "pflushs",
  "bfset",
  "ploadr",
  "bftst",
  "ploadw",
  "bgnd",
  "plpar",
  "plpaw",
  "bkpt",
  "callm",
  "prestore",
  "psave",
  "cinvl",
  "cinvp",
  "cinva",
  "cpushl",
  "cpushp",
  "cpusha",
  "ptestr",
  "ptestw",
  "pulse",
  "rtd",
  "rtm",
  "trap",
  "fnop",
  "frestore",
  "fsave",
  "halt",
  "intouch",
  "jmp",
  "jsr",
  "linea",
  "line_a",
  "linef",
  "line_f",
  "bhs",
  "blo",
  "bhi",
  "bls",
  "bcc",
  "bcs",
  "bne",
  "beq",
  "bvc",
  "bvs",
  "bpl",
  "bmi",
  "bge",
  "blt",
  "bgt",
  "ble",
  "bra",
  "bsr",
  "jbhs",
  "jblo",
  "jbhi",
  "jbls",
  "jbcc",
  "jbcs",
  "jbne",
  "jbeq",
  "jbvc",
  "jbvs",
  "jbpl",
  "jbmi",
  "jbge",
  "jblt",
  "jbgt",
  "jble",
  "jbra",
  "jbsr",
  "pmovefd",
  "mov3q",
  "movclr",
  "movec",
  "moveq",
  "wdebug",
  "pea",
  "bitrev",
  "byterev",
  "divsl",
  "divul",
  "exg",
  "pvalid",
  "rems",
  "extb",
  "remu",
  "sats",
  "ff1",
  "lea",
  "lpstop",
  "pdbbs",
  "pdbbc",
  "pdbls",
  "pdblc",
  "pdbss",
  "pdbsc",
  "pdbas",
  "pdbac",
  "pdbws",
  "pdbwc",
  "pdbis",
  "pdbic",
  "pdbgs",
  "pdbgc",
  "pdbcs",
  "pdbcc",
  "dbt",
  "dbf",
  "dbra",
  "dbhi",
  "dbls",
  "dbcc",
  "dbhs",
  "dbcs",
  "dblo",
  "dbne",
  "dbvs",
  "dbeq",
  "dbpl",
  "dbvc",
  "dbmi",
  "dbge",
  "dblt",
  "dbgt",
  "dble",
  "strldsr",
  "swap",
  "fdbf",
  "fdbeq",
  "fdbogt",
  "fdboge",
  "fdbolt",
  "fdbole",
  "fdbogl",
  "fdbor",
  "fdbun",
  "fdbueq",
  "fdbugt",
  "fdbuge",
  "fdbult",
  "fdbule",
  "fdbne",
  "fdbt",
  "fdbsf",
  "fdbseq",
  "fdbgt",
  "fdbge",
  "fdblt",
  "fdble",
  "fdbgl",
  "fdbgle",
  "fdbngle",
  "fdbngl",
  "fdbnle",
  "fdbnlt",
  "fdbnge",
  "fdbngt",
  "fdbsne",
  "fdbst",
  "nbcd",
  "abcd",
  "psbs",
  "psbc",
  "psls",
  "pslc",
  "psss",
  "pssc",
  "psas",
  "psac",
  "psws",
  "pswc",
  "psis",
  "psic",
  "psgs",
  "psgc",
  "pscs",
  "pscc",
  "sbcd",
  "st",
  "sf",
  "shi",
  "sls",
  "scc",
  "shs",
  "scs",
  "slo",
  "sne",
  "seq",
  "svc",
  "svs",
  "spl",
  "smi",
  "sge",
  "slt",
  "sgt",
  "sle",
  "tas",
  "fsf",
  "fseq",
  "fsogt",
  "fsoge",
  "fsolt",
  "fsole",
  "fsogl",
  "fsor",
  "fsun",
  "fsueq",
  "fsugt",
  "fsuge",
  "fsult",
  "fsule",
  "fsne",
  "fst",
  "fssf",
  "fsseq",
  "fsgt",
  "fsge",
  "fslt",
  "fsle",
  "fsgl",
  "fsgle",
  "fsngle",
  "fsngl",
  "fsnle",
  "fsnlt",
  "fsnge",
  "fsngt",
  "fssne",
  "fsst",
  "mvs",
  "mvz",
  "pmove",
  "fmovem",
  "fmovecr",
  "fabs",
  "fsabs",
  "fdabs",
  "facos",
  "fadd",
  "fsadd",
  "fdadd",
  "fasin",
  "fatan",
  "fatanh",
  "fcmp",
  "fcos",
  "fcosh",
  "fdiv",
  "fsdiv",
  "fddiv",
  "fetox",
  "fetoxm1",
  "fgetexp",
  "fgetman",
  "fint",
  "fintrz",
  "flog10",
  "flog2",
  "flogn",
  "flognp1",
  "fmod",
  "fmove",
  "fsmove",
  "fdmove",
  "fmul",
  "fsmul",
  "fdmul",
  "fneg",
  "fsneg",
  "fdneg",
  "frem",
  "fscale",
  "fsgldiv",
  "fsglmul",
  "fsin",
  "fsinh",
  "fsqrt",
  "fssqrt",
  "fdsqrt",
  "fsub",
  "fssub",
  "fdsub",
  "ftan",
  "ftanh",
  "ftentox",
  "ftwotox",
];

const instructionsNoOperands = [
  "nop",
  "reset",
  "rte",
  "rtr",
  "rts",
  "trapv",
  "illegal",
];

const directives = [
  "align",
  "cnop",
  "opt",
  "cargs",
  "comm",
  "echo",
  "end",
  "fail",
  "fpu",
  "idnt",
  "jumpptr",
  "llen",
  "load",
  "machine",
  "mmu",
  "offset",
  "opword",
  "org",
  "output",
  "plen",
  "printt",
  "printv",
  "record",
  "rorg",
  "rsset",
  "setfo",
  "setso",
  "spc",
  "ttl",
];

const directiveNoOperands = [
  "clrfo",
  "clrso",
  "comment",
  "einline",
  "even",
  "inline",
  "list",
  "mexit",
  "nolist",
  "nopage",
  "odd",
  "page",
  "popsection",
  "pushsection",
  "rsreset",
];

const sectionTypes = [
  "bss",
  "bss_c",
  "bss_f",
  "bss_p",
  "text",
  "text_c",
  "text_f",
  "text_p",
  "code",
  "code_c",
  "code_f",
  "code_p",
  "cseg",
  "data",
  "data_c",
  "data_f",
  "data_p",
  "dseg",
];

const conditionalExp = [
  "if",
  "ifeq",
  "ifne",
  "ifgt",
  "ifge",
  "iflt",
  "ifle",
  "ifb",
  "ifnb",
];
const conditionalNoop = ["if1", "if2", "ifp1"];
const conditionalComp = ["ifc", "ifnc"];
const conditionalSymbol = ["ifd", "ifnd", "ifmacrod", "ifmacrond"];

const memoryTypes = ["chip", "fast"];

const registerNames = ["sp", "pc", "sr", "ccr", "usp", "vbr"];

module.exports = grammar({
  name: "m68k",

  word: ($) => $.symbol,

  supertypes: ($) => [
    $._mnemonic,
    $._operand,
    $._size,
    $._symbol,
    $._definition,
    $._effective_address,
    $._register,
    $._numeric_literal,
    $._builtin,
  ],

  extras: ($) => [], // handle whitespace manually

  conflicts: ($) => [
    [
      $.symbol_definition,
      $.symbol_assignment,
      $.offset_definition,
      $.register_definition,
      $.offset_definition,
      $.register_list_definition,
      $.macro_definition,
      $._symbol,
    ],
    [$._effective_address, $._register_list_item],
    [$.element_list],
    [$.macro_call],

    [$._symbol, $.interpolated],
    [$.interpolated],
  ],

  rules: {
    source_file: ($) =>
      seq(optional($._nl), prec.left(listSep($._element, $._nl))),

    element_list: ($) => listSep($._element, $._nl),

    _element: ($) =>
      choice(
        $._definition,
        $._statement,
        $._macro_call_statement,
        $._block,
        // Label / whitespace:
        seq($._start_line, optional($._end_line)),
        // Comment only:
        seq(optional($._ws), $.comment)
      ),

    comment: ($) => choice($._comment_star, $._comment_semi),
    _comment_semi: ($) => /;.*/,
    _comment_star: ($) => /\*.*/,

    _definition: ($) =>
      choice(
        $.macro_definition,
        $.symbol_definition,
        $.symbol_assignment,
        $.offset_definition,
        $.register_definition,
        $.register_list_definition
      ),

    _statement: ($) =>
      seq(
        choice(
          seq(
            $._start_line,
            choice(
              $.instruction,
              $.conditional_instruction,
              $.directive,
              $.section,
              $.include,
              $.include_bin,
              $.include_dir,
              $.external_definition,
              $.external_reference,
              $._data
            )
          )
        ),
        optional($._end_line)
      ),

    _macro_call_statement: ($) =>
      prec.dynamic(
        -1,
        seq(choice($._start_line, $._ws), $.macro_call, optional($._end_line))
      ),

    _block: ($) =>
      seq(
        $._start_line,
        choice($.repeat, $.conditional, $.rem, $.end),
        optional($._end_line)
      ),

    label: ($) => field("name", $._symbol),

    _start_line: ($) =>
      prec.right(
        choice(
          seq(
            optional($._ws),
            alias($.label, $.external_label),
            "::",
            optional($._ws)
          ), //  double colon makes label externally visible
          seq(optional($._ws), $.label, ":", optional($._ws)), // colon required with leading whitespace
          seq($.label, optional(":"), optional($._ws)),
          $._ws // require at least whitespace before statement
        )
      ),

    _end_line: ($) =>
      choice(
        seq(optional($._ws), alias($._comment_semi, $.comment)),
        // Start comment must have whitespace to avoid conflict with multiplication operator
        // TODO: would be better if whitepace didn't form part of comment pattern
        // This would be handled by positional comment if I could get precedence right
        alias(/\s+\*.+/, $.comment),
        seq($._ws, alias(/.+/, $.comment)), // Positional comment - any chars allowed after statement
        $._ws // Allow trailing whitespace
      ),

    // Mnemonics:

    _mnemonic: ($) =>
      choice(
        $._instruction_mnemonic_op,
        $._instruction_mnemonic_noop,

        $._directive_mnemonic_op,
        $._directive_mnemonic_noop,

        $._data_constant_mnemonic,
        $._data_constant_short_mnemonic,
        $._data_space_mnemonic,
        $._data_space_short_mnemonic,
        $._directive_mnemonic_noop,
        $._directive_mnemonic_op,
        $._external_definition_mnemonic,
        $._external_reference_mnemonic,
        $._incbin_mnemonic,
        $._incdir_mnemonic,
        $._include_mnemonic,
        $._register_definition_mnemonic,
        $._register_list_definition_mnemonic,
        $._rs_mnemonic,
        $._section_mnemonic,
        $._symbol_assignment_mnemonic,
        $._symbol_definition_mnemonic,

        $._conditional_mnemonic_exp,
        $._conditional_mnemonic_noop,
        $._conditional_mnemonic_comp,
        $._conditional_mnemonic_symbol,
        $._conditional_mnemonic_inline,
        $._else_mnemonic,
        $._endif_mnemonic,
        $._macro_mnemonic,
        $._endm_mnemonic,
        $._rem_mnemonic,
        $._erem_mnemonic,
        $._rept_mnemonic,
        $._endr_mnemonic,
        $._end_mnemonic,

        $.section_type
      ),

    // instructions:

    _instruction_mnemonic_op: ($) =>
      alias(mnemonicChoice(instructions), $.instruction_mnemonic),
    _instruction_mnemonic_noop: ($) =>
      alias(mnemonicChoice(instructionsNoOperands), $.instruction_mnemonic),

    // directives:

    _data_constant_mnemonic: ($) =>
      alias(mnemonicChoice(["dc", "dr"]), $.directive_mnemonic),
    _data_constant_short_mnemonic: ($) =>
      alias(mnemonicChoice(["db", "dw", "dl"]), $.directive_mnemonic),
    _data_space_mnemonic: ($) =>
      alias(mnemonicChoice(["dcb", "blk"]), $.directive_mnemonic),
    _data_space_short_mnemonic: ($) =>
      alias(caseInsensitive("ds"), $.directive_mnemonic),
    _directive_mnemonic_noop: ($) =>
      alias(mnemonicChoice(directiveNoOperands), $.directive_mnemonic),
    _directive_mnemonic_op: ($) =>
      alias(mnemonicChoice(directives), $.directive_mnemonic),
    _external_definition_mnemonic: ($) =>
      alias(mnemonicChoice(["xdef", "public", "weak"]), $.directive_mnemonic),
    _external_reference_mnemonic: ($) =>
      alias(mnemonicChoice(["xref", "nref"]), $.directive_mnemonic),
    _incbin_mnemonic: ($) =>
      alias(caseInsensitive("incbin"), $.directive_mnemonic),
    _incdir_mnemonic: ($) =>
      alias(caseInsensitive("incdir"), $.directive_mnemonic),
    _include_mnemonic: ($) =>
      alias(caseInsensitive("include"), $.directive_mnemonic),
    _register_definition_mnemonic: ($) =>
      alias(mnemonicChoice(["equr", "fequr"]), $.directive_mnemonic),
    _register_list_definition_mnemonic: ($) =>
      alias(
        mnemonicChoice(["equrl", "fequrl", "reg", "freg"]),
        $.directive_mnemonic
      ),
    _rs_mnemonic: ($) => alias(caseInsensitive("rs"), $.directive_mnemonic),
    _section_mnemonic: ($) =>
      alias(caseInsensitive("section"), $.directive_mnemonic),
    _symbol_assignment_mnemonic: ($) =>
      alias(caseInsensitive("set"), $.directive_mnemonic),
    _symbol_definition_mnemonic: ($) =>
      alias(mnemonicChoice(["equ", "fequ"]), $.directive_mnemonic),

    // control:

    _conditional_mnemonic_exp: ($) =>
      alias(mnemonicChoice(conditionalExp), $.control_mnemonic),
    _conditional_mnemonic_noop: ($) =>
      alias(mnemonicChoice(conditionalNoop), $.control_mnemonic),
    _conditional_mnemonic_comp: ($) =>
      alias(mnemonicChoice(conditionalComp), $.control_mnemonic),
    _conditional_mnemonic_symbol: ($) =>
      alias(mnemonicChoice(conditionalSymbol), $.control_mnemonic),
    _conditional_mnemonic_inline: ($) =>
      alias(caseInsensitive("iif"), $.control_mnemonic),
    _else_mnemonic: ($) =>
      alias(mnemonicChoice(["else", "elseif"]), $.control_mnemonic),
    _endif_mnemonic: ($) =>
      alias(mnemonicChoice(["endif", "endc"]), $.control_mnemonic),
    _macro_mnemonic: ($) => alias(caseInsensitive("macro"), $.control_mnemonic),
    _endm_mnemonic: ($) => alias(caseInsensitive("endm"), $.control_mnemonic),
    _rem_mnemonic: ($) => alias(caseInsensitive("rem"), $.control_mnemonic),
    _erem_mnemonic: ($) => alias(caseInsensitive("erem"), $.control_mnemonic),
    _rept_mnemonic: ($) => alias(caseInsensitive("rept"), $.control_mnemonic),
    _endr_mnemonic: ($) => alias(caseInsensitive("endr"), $.control_mnemonic),
    _end_mnemonic: ($) => alias(caseInsensitive("end"), $.control_mnemonic),

    section_type: () => choice(...sectionTypes.map(caseInsensitive)),
    memory_type: () => choice(...memoryTypes.map(caseInsensitive)),

    // Instruction:

    instruction: ($) =>
      prec.right(
        choice(
          // Instruction with operands
          seq(
            field("mnemonic", $._instruction_mnemonic_op),
            optional(seq(".", field("size", $._size))),
            seq($._ws, field("operands", $.operand_list))
          ),
          // Instruction with no operands
          seq(
            field("mnemonic", $._instruction_mnemonic_noop),
            optional(seq(".", field("size", $._size)))
          )
        )
      ),

    operand_list: ($) => listSep($._operand, $._sep),

    _operand: ($) =>
      choice($._effective_address, $.register_list, $._expression),

    _size: ($) => choice($.size, $.macro_arg),
    size: ($) => /[bwlsdxqBWLSDXQ]/,

    // Directives:

    directive: ($) =>
      prec.right(
        choice(
          seq(
            field("mnemonic", $._directive_mnemonic_noop),
            optional(seq(".", field("size", $._size)))
          ),
          seq(
            field("mnemonic", $._directive_mnemonic_op),
            optional(seq(".", field("size", $._size))),
            $._ws,
            field("operands", $.operand_list)
          )
        )
      ),

    // section

    section: ($) =>
      choice(
        seq(field("type", $.section_type)),
        seq(
          $._section_mnemonic,
          $._ws,
          field("name", choice($._symbol, $.string_literal)),
          optional(
            seq(
              $._sep,
              field("type", $.section_type),
              optional(
                seq(
                  $._sep,
                  field(
                    "memory_type",
                    choice($.memory_type, $._numeric_literal)
                  )
                )
              ),
              optional($._sep)
            )
          )
        )
      ),

    // includes

    include: ($) => seq($._include_mnemonic, $._ws, field("path", $.path)),
    include_dir: ($) => seq($._incdir_mnemonic, $._ws, field("path", $.path)),
    include_bin: ($) =>
      seq(
        $._incbin_mnemonic,
        $._ws,
        field("path", $.path),
        optional(
          seq(
            $._sep,
            field("offset", $._expression),
            optional(seq(",", field("length", $._expression))),
            optional($._sep)
          )
        )
      ),

    path: ($) => choice(/[^"'\s,]+/, $.string_literal),

    // data:

    _data: ($) => choice($.data_constant, $.data_space),

    data_constant: ($) =>
      seq(
        choice(
          seq(
            field("mnemonic", $._data_constant_mnemonic),
            optional(seq(".", field("size", $._size)))
          ),
          field("mnemonic", $._data_constant_short_mnemonic)
        ),
        $._ws,
        field("values", $.expression_list)
      ),

    data_space: ($) =>
      choice(
        seq(
          field("mnemonic", $._data_space_short_mnemonic),
          optional(seq(".", field("size", $._size))),
          $._ws,
          field("length", $._expression)
        ),
        seq(
          field("mnemonic", $._data_space_mnemonic),
          optional(seq(".", field("size", $._size))),
          $._ws,
          field("length", $._expression),
          optional(seq($._sep, field("fill", $._expression))),
          optional($._sep)
        )
      ),

    // Macro call:

    macro_call: ($) =>
      seq(
        field("name", $._symbol),
        optional(seq(".", field("qualifier", $._size))),
        optional(seq($._ws, field("operands", $.operand_list)))
      ),

    // Block / multiline:

    repeat: ($) =>
      seq(
        $._rept_mnemonic,
        $._ws,
        field("count", $._expression),
        optional($._end_line),
        $._nl,
        field("body", $.element_list),
        $._nl,
        $._start_line,
        $._endr_mnemonic
      ),

    conditional: ($) =>
      seq(
        choice(
          // Expression
          seq(
            field("mnemonic", $._conditional_mnemonic_exp),
            $._ws,
            field("test", $._expression)
          ),
          // No operand
          seq(field("mnemonic", $._conditional_mnemonic_noop)),
          // Comparison
          seq(
            field("mnemonic", $._conditional_mnemonic_comp),
            $._ws,
            field("left", $._expression),
            $._sep,
            field("right", $._expression),
            optional($._sep)
          ),
          // Symbol
          seq(
            field("mnemonic", $._conditional_mnemonic_symbol),
            $._ws,
            field("test", $._symbol)
          )
        ),
        optional($._end_line),
        $._nl,
        field("consequent", $.element_list),
        $._nl,
        optional(
          seq(
            $._start_line,
            $._else_mnemonic,
            optional($._end_line),
            $._nl,
            field("alternate", $.element_list),
            $._nl
          )
        ),
        $._start_line,
        $._endif_mnemonic
      ),

    conditional_instruction: ($) =>
      seq(
        $._conditional_mnemonic_inline,
        $._ws,
        field("test", $._expression),
        $._ws,
        field("consequent", $.instruction)
      ),

    rem: ($) =>
      seq(
        $._rem_mnemonic,
        optional($._end_line),
        $._nl,
        alias(repeat(/.*\n/), $.comment),
        $._start_line,
        $._erem_mnemonic
      ),

    end: ($) => prec.right(seq($._end_mnemonic, listSep(/.*/, $._nl))),

    macro_definition: ($) =>
      seq(
        choice(
          seq(
            field("name", $.symbol),
            optional(":"),
            optional($._ws),
            $._macro_mnemonic
          ),
          seq($._ws, $._macro_mnemonic, $._ws, field("name", $.symbol))
        ),
        optional($._end_line),
        $._nl,
        field("body", $.element_list),
        $._nl,
        $._start_line,
        $._endm_mnemonic,
        optional($._end_line)
      ),

    // Definition directives:

    symbol_definition: ($) =>
      seq(
        field("name", $.symbol),
        optional(":"),
        optional($._ws),
        choice(
          seq(
            "=",
            optional(seq(".", field("size", alias(/[sdxpSDXP]/, $.size)))),
            optional($._ws)
          ),
          seq(
            field("mnemonic", $._symbol_definition_mnemonic),
            optional(seq(".", field("size", alias(/[sdxpSDXP]/, $.size)))),
            $._ws
          )
        ),
        field("value", $._expression),
        optional($._end_line)
      ),

    symbol_assignment: ($) =>
      seq(
        field("name", $.symbol),
        optional(":"),
        optional($._ws),
        $._symbol_assignment_mnemonic,
        optional($._ws),
        field("value", $._expression),
        optional($._end_line)
      ),

    offset_definition: ($) =>
      seq(
        field("name", $.symbol),
        optional(":"),
        optional($._ws),
        $._rs_mnemonic,
        optional(seq(".", field("size", $._size))),
        $._ws,
        field("length", $._expression),
        optional($._end_line)
      ),

    register_definition: ($) =>
      seq(
        field("name", $.symbol),
        optional(":"),
        optional($._ws),
        field("mnemonic", $._register_definition_mnemonic),
        optional($._ws),
        field(
          "value",
          choice(
            $.data_register,
            $.address_register,
            $.float_register,
            $.named_register
          )
        ),
        optional($._end_line)
      ),

    register_list_definition: ($) =>
      seq(
        field("name", $.symbol),
        optional(":"),
        optional($._ws),
        field("mnemonic", $._register_list_definition_mnemonic),
        optional($._ws),
        field("value", choice($.register_list)),
        optional($._end_line)
      ),

    external_definition: ($) =>
      seq(
        field("mnemonic", $._external_definition_mnemonic),
        $._ws,
        field("symbols", $.symbol_list)
      ),

    external_reference: ($) =>
      seq(
        field("mnemonic", $._external_reference_mnemonic),
        $._ws,
        field("symbols", $.symbol_list)
      ),

    // Effective addresses:

    _effective_address: ($) =>
      choice(
        $._register,
        $.immediate_value,
        $.absolute_value,
        $.indirect_address,
        $.indirect_address_postinc,
        $.indirect_address_predec,
        $.offset_address,
        $.offset_address_idx
      ),

    immediate_value: ($) => seq("#", field("value", $._expression)),

    absolute_value: ($) =>
      choice(
        seq(field("value", $._expression), ".", field("size", $._size)),
        seq("(", field("value", $._expression), ").", field("size", $._size))
      ),

    _register: ($) =>
      choice(
        $.named_register,
        $.data_register,
        $.address_register,
        $.float_register
      ),

    named_register: ($) => choice(...registerNames.map(caseInsensitive)),

    data_register: ($) => /[dD][0-7]/,
    address_register: ($) => /[aA][0-7]/,
    float_register: ($) => /[fF][pP][0-7]/,

    _address: ($) =>
      prec(
        PREC.address,
        choice($.address_register, $.named_register, $._symbol)
      ),

    indirect_address: ($) => seq("(", field("register", $._address), ")"),

    indirect_address_postinc: ($) =>
      seq("(", field("register", $._address), ")+"),

    indirect_address_predec: ($) =>
      seq("-(", field("register", $._address), ")"),

    offset_address: ($) =>
      choice(
        seq(
          "(",
          field("offset", $._expression),
          ",",
          field("register", $._address),
          ")"
        ),
        seq(
          field("offset", $._expression),
          "(",
          field("register", $._address),
          ")"
        )
      ),

    offset_address_idx: ($) =>
      choice(
        seq(
          "(",
          field("offset", $._expression),
          ",",
          field("register", $._address),
          ",",
          field("idx", $.idx),
          ")"
        ),
        seq(
          optional(field("offset", $._expression)),
          "(",
          field("register", $._address),
          ",",
          field("idx", $.idx),
          ")"
        )
      ),

    idx: ($) =>
      seq(
        field(
          "register",
          choice($.data_register, $.address_register, $._symbol)
        ),
        optional(seq(".", field("size", $._size)))
      ),

    // Register lists:

    register_list: ($) =>
      seq($._register_list_item, repeat(seq("/", $._register_list_item))),

    _register_list_item: ($) => choice($.register_range, $._register),

    register_range: ($) =>
      seq(
        field("from", $._register),
        "-",
        field("to", choice($._register, $.register_number))
      ),

    register_number: ($) => /[0-7]/,

    // Expressions:

    _expression: ($) =>
      choice(
        $._numeric_literal,
        $.string_literal,
        $.unary_expression,
        $.binary_expression,
        $.parenthesized_expression,
        $._symbol,
        $._builtin
      ),

    expression_list: ($) => listSep($._expression, $._sep),

    parenthesized_expression: ($) => seq("(", $._expression, ")"),

    unary_expression: ($) =>
      prec(
        PREC.unary,
        seq(
          field("operator", alias(choice("+", "-", "!", "~"), $.operator)),
          field("operand", $._expression)
        )
      ),

    binary_expression: ($) =>
      choice(
        ...binaryOperators.map((operator, i) =>
          prec.left(
            i,
            seq(
              field("left", $._expression),
              field("operator", alias(operator, $.operator)),
              field("right", $._expression)
            )
          )
        )
      ),

    _numeric_literal: ($) =>
      choice(
        $.hexadecimal_literal,
        $.binary_literal,
        $.octal_literal,
        $.decimal_literal
      ),

    hexadecimal_literal: ($) => /\$[0-9A-Fa-z]+/,
    binary_literal: ($) => /%[01]+/,
    octal_literal: ($) => /@[0-7]+/,
    decimal_literal: ($) => /\d*\.?\d+/,

    string_literal: ($) =>
      choice(
        // Single quoted
        seq(
          "'",
          repeat(choice(prec(1, /[^'\n\\]+/), "\\'", "''", $.macro_arg)),
          "'"
        ),
        // Double quoted
        seq(
          '"',
          repeat(choice(prec(1, /[^"\n\\]+/), '\\"', '""', $.macro_arg)),
          '"'
        )
      ),

    macro_arg: ($) =>
      choice(
        /\\[0-9]/,
        "\\@",
        "\\@!",
        "\\@?",
        "\\@@",
        "\\#",
        /\\\?[0-9]/,
        "\\.",
        "\\+",
        "\\-",
        /\\\.?[a-zA-Z][a-zA-Z0-9_]*/,
        /\\\$\.?[a-zA-Z][a-zA-Z0-9_]*/
      ),

    _builtin: ($) => choice($.reptn, $.carg, $.narg),
    reptn: ($) => caseInsensitive("reptn"),
    carg: ($) => caseInsensitive("carg"),
    narg: ($) => caseInsensitive("narg"),

    // Misc

    _symbol: ($) => choice($.symbol, $.interpolated, $.macro_arg),

    symbol: ($) => /\.?[a-zA-Z0-9_]+\$?/,
    symbol_list: ($) => listSep($._symbol, $._sep),

    interpolated: ($) =>
      seq(
        choice(
          seq($.macro_arg, $.symbol),
          seq($.symbol, $.macro_arg),
          seq(alias(".", $.symbol), $.macro_arg)
        ),
        repeat(choice($.macro_arg, $.symbol))
      ),

    _macro_name: ($) => alias(prec(-1, /\.?[a-zA-Z0-9_]+/), $.symbol),

    _sep: () => /\s*,\s*/,

    // Whitespace:

    _ws: () => /[ \t]+/,
    _nl: () => /(\r\n|\n|\r)+/,
  },
});

function listSep(rule, sep = ",") {
  return seq(repeat(seq(rule, sep)), rule, optional(sep));
}

function toCaseInsensitive(a) {
  var ca = a.charCodeAt(0);
  if (ca >= 97 && ca <= 122) return `[${a}${a.toUpperCase()}]`;
  if (ca >= 65 && ca <= 90) return `[${a.toLowerCase()}${a}]`;
  return a;
}

function caseInsensitive(keyword) {
  return new RegExp(keyword.split("").map(toCaseInsensitive).join(""));
}

function mnemonicChoice(options) {
  return choice(...options.map(caseInsensitive));
}
