import { defineComponent, pushScopeId, popScopeId, openBlock, createElementBlock, createElementVNode, toDisplayString, createStaticVNode, ref, watch, createCommentVNode, withDirectives, mergeProps, vModelText, createTextVNode } from 'vue';

var script$2 = defineComponent({
    name: "HelloWorld",
    props: {
        msg: String,
    },
});

pushScopeId("data-v-469af010");
const _hoisted_1$1 = { class: "hello" };
const _hoisted_2$1 = /*#__PURE__*/createStaticVNode("<p data-v-469af010> For a guide and recipes on how to configure / customize this project,<br data-v-469af010> check out the <a href=\"https://cli.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-469af010>vue-cli documentation</a>. </p><h3 data-v-469af010>Installed CLI Plugins</h3><ul data-v-469af010><li data-v-469af010><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel\" target=\"_blank\" rel=\"noopener\" data-v-469af010>babel</a></li><li data-v-469af010><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript\" target=\"_blank\" rel=\"noopener\" data-v-469af010>typescript</a></li><li data-v-469af010><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint\" target=\"_blank\" rel=\"noopener\" data-v-469af010>eslint</a></li></ul><h3 data-v-469af010>Essential Links</h3><ul data-v-469af010><li data-v-469af010><a href=\"https://vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-469af010>Core Docs</a></li><li data-v-469af010><a href=\"https://forum.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-469af010>Forum</a></li><li data-v-469af010><a href=\"https://chat.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-469af010>Community Chat</a></li><li data-v-469af010><a href=\"https://twitter.com/vuejs\" target=\"_blank\" rel=\"noopener\" data-v-469af010>Twitter</a></li><li data-v-469af010><a href=\"https://news.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-469af010>News</a></li></ul><h3 data-v-469af010>Ecosystem</h3><ul data-v-469af010><li data-v-469af010><a href=\"https://router.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-469af010>vue-router</a></li><li data-v-469af010><a href=\"https://vuex.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-469af010>vuex</a></li><li data-v-469af010><a href=\"https://github.com/vuejs/vue-devtools#vue-devtools\" target=\"_blank\" rel=\"noopener\" data-v-469af010>vue-devtools</a></li><li data-v-469af010><a href=\"https://vue-loader.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-469af010>vue-loader</a></li><li data-v-469af010><a href=\"https://github.com/vuejs/awesome-vue\" target=\"_blank\" rel=\"noopener\" data-v-469af010>awesome-vue</a></li></ul>", 7);
popScopeId();

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("h1", null, toDisplayString(_ctx.msg), 1 /* TEXT */),
    _hoisted_2$1
  ]))
}

script$2.render = render$2;
script$2.__scopeId = "data-v-469af010";
script$2.__file = "src/components/HelloWorld.vue";

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/* eslint-disable */
var MetaKey;
(function (MetaKey) {
    MetaKey["Title"] = "title";
    MetaKey["Type"] = "type";
    MetaKey["Collection"] = "collection";
    MetaKey["Description"] = "description";
    MetaKey["Material"] = "material";
})(MetaKey || (MetaKey = {}));
var RelationType;
(function (RelationType) {
    RelationType["AuthoredBy"] = "authoredBy";
    RelationType["IsIn"] = "isIn";
})(RelationType || (RelationType = {}));
var MinimalEntityFragmentDoc = {
    kind: "Document",
    definitions: [
        {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "minimalEntity" },
            typeCondition: {
                kind: "NamedType",
                name: { kind: "Name", value: "Entity" },
            },
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    { kind: "Field", name: { kind: "Name", value: "id" } },
                    { kind: "Field", name: { kind: "Name", value: "type" } },
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "metadata" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "key" },
                                value: {
                                    kind: "ListValue",
                                    values: [
                                        { kind: "EnumValue", value: "title" },
                                        { kind: "EnumValue", value: "type" },
                                    ],
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "key" } },
                                { kind: "Field", name: { kind: "Name", value: "value" } },
                            ],
                        },
                    },
                ],
            },
        },
    ],
};
var FullEntityFragmentDoc = {
    kind: "Document",
    definitions: [
        {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "fullEntity" },
            typeCondition: {
                kind: "NamedType",
                name: { kind: "Name", value: "Entity" },
            },
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    { kind: "Field", name: { kind: "Name", value: "id" } },
                    { kind: "Field", name: { kind: "Name", value: "type" } },
                    {
                        kind: "Field",
                        alias: { kind: "Name", value: "title" },
                        name: { kind: "Name", value: "metadata" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "key" },
                                value: {
                                    kind: "ListValue",
                                    values: [{ kind: "EnumValue", value: "title" }],
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "value" } },
                            ],
                        },
                    },
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "metadata" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "key" },
                                value: {
                                    kind: "ListValue",
                                    values: [
                                        { kind: "EnumValue", value: "description" },
                                        { kind: "EnumValue", value: "material" },
                                        { kind: "EnumValue", value: "type" },
                                    ],
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "key" } },
                                { kind: "Field", name: { kind: "Name", value: "value" } },
                            ],
                        },
                    },
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "mediafiles" },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "original_file_location" },
                                },
                            ],
                        },
                    },
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "relations" },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "key" } },
                                { kind: "Field", name: { kind: "Name", value: "type" } },
                            ],
                        },
                    },
                ],
            },
        },
    ],
};
var GetEntitiesDocument = {
    kind: "Document",
    definitions: __spreadArrays([
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "getEntities" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "limit" },
                    },
                    type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
                },
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
                    type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
                },
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "searchQuery" },
                    },
                    type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "Entities" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "limit" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "limit" },
                                },
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "skip" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "skip" },
                                },
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "searchQuery" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "searchQuery" },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "count" } },
                                { kind: "Field", name: { kind: "Name", value: "limit" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "results" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "FragmentSpread",
                                                name: { kind: "Name", value: "minimalEntity" },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        }
    ], MinimalEntityFragmentDoc.definitions),
};
var GetFullEntitiesDocument = {
    kind: "Document",
    definitions: __spreadArrays([
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "getFullEntities" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "limit" },
                    },
                    type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
                },
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
                    type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
                },
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "searchQuery" },
                    },
                    type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
                },
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "fetchPolicy" },
                    },
                    type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "Entities" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "limit" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "limit" },
                                },
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "skip" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "skip" },
                                },
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "searchQuery" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "searchQuery" },
                                },
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "fetchPolicy" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "fetchPolicy" },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "count" } },
                                { kind: "Field", name: { kind: "Name", value: "limit" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "results" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "FragmentSpread",
                                                name: { kind: "Name", value: "fullEntity" },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        }
    ], FullEntityFragmentDoc.definitions),
};
var GetEntityByIdDocument = {
    kind: "Document",
    definitions: __spreadArrays([
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "getEntityById" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "String" },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "Entity" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "id" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "id" },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "fullEntity" },
                                },
                            ],
                        },
                    },
                ],
            },
        }
    ], FullEntityFragmentDoc.definitions),
};
({
    kind: "Document",
    definitions: __spreadArrays([
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "editMetadata" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "String" },
                        },
                    },
                },
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "metadata" },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: { kind: "Name", value: "MetadataInput" },
                                },
                            },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "replaceMetadata" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "id" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "id" },
                                },
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "metadata" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "metadata" },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "fullEntity" },
                                },
                            ],
                        },
                    },
                ],
            },
        }
    ], FullEntityFragmentDoc.definitions),
});

var script$1 = defineComponent({
    name: 'BaseButton',
    props: {
        text: {
            type: String,
            required: true,
        },
        onClick: {
            type: Function,
            required: true,
        },
    },
    emits: [],
    setup: function (props, _a) {
        _a.emit;
        return {};
    },
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", {
    onClick: _cache[0] || (_cache[0] = $event => (_ctx.onClick())),
    class: "py-2 px-4 mx-2 text-text-white bg-accent-purple rounded-full shadow-lg font-bold"
  }, toDisplayString(_ctx.text), 1 /* TEXT */))
}

script$1.render = render$1;
script$1.__file = "src/components/BaseButton.vue";

function r(r,e,n){var i,t,o;void 0===e&&(e=50),void 0===n&&(n={});var a=null!=(i=n.isImmediate)&&i,u=null!=(t=n.callback)&&t,c=n.maxWait,v=Date.now(),l=[];function f(){if(void 0!==c){var r=Date.now()-v;if(r+e>=c)return c-r}return e}var d=function(){var e=[].slice.call(arguments),n=this;return new Promise(function(i,t){var c=a&&void 0===o;if(void 0!==o&&clearTimeout(o),o=setTimeout(function(){if(o=void 0,v=Date.now(),!a){var i=r.apply(n,e);u&&u(i),l.forEach(function(r){return (0, r.resolve)(i)}),l=[];}},f()),c){var d=r.apply(n,e);return u&&u(d),i(d)}l.push({resolve:i,reject:t});})};return d.cancel=function(r){void 0!==o&&clearTimeout(o),l.forEach(function(e){return (0, e.reject)(r)}),l=[];},d}

var script = defineComponent({
    name: 'InputField',
    inheritAttrs: false,
    props: {
        label: { type: String },
        modelValue: { type: String, default: '' },
        debounce: { type: Boolean, default: false },
        debounceWait: { type: Number, default: 400 },
    },
    emits: ['update:modelValue', 'onClick'],
    setup: function (props, _a) {
        var emit = _a.emit;
        var inputValue = ref(props.modelValue);
        var emitValue = function (value) { return emit('update:modelValue', value); };
        if (props.debounce) {
            emitValue = r(emitValue, props.debounceWait);
        }
        var onClick = function () {
            console.log('onclick');
            emit('onClick');
        };
        watch(inputValue, emitValue);
        return { inputValue: inputValue, onClick: onClick };
    },
});

const _hoisted_1 = { class: "flex block my-2 text-center text-text-dark py-2 shadow-lg pl-2 pr-8 w-full min-w-48 text-neutral-700 text-xl focus:outline-none rounded-full bg-text-white" };
const _hoisted_2 = {
  key: 0,
  class: "ml-1 px-4 flex items-center font-bold text-sm rounded-full bg-accent-purple text-text-white"
};
const _hoisted_3 = /*#__PURE__*/createElementVNode("svg", {
  class: "mr-2 stroke-current",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /*#__PURE__*/createElementVNode("path", {
    d: "M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z",
    stroke: "#2D242A",
    "stroke-miterlimit": "12",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }),
  /*#__PURE__*/createElementVNode("path", {
    d: "M15.0002 15L11.2422 11.242",
    stroke: "#2D242A",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1 /* HOISTED */);
const _hoisted_4 = /*#__PURE__*/createTextVNode(" Zoeken ");
const _hoisted_5 = [
  _hoisted_3,
  _hoisted_4
];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("label", _hoisted_1, [
    (_ctx.label)
      ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(_ctx.label), 1 /* TEXT */))
      : createCommentVNode("v-if", true),
    withDirectives(createElementVNode("input", mergeProps({
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (_ctx.inputValue = $event))
    }, _ctx.$attrs, {
      type: "text",
      class: "w-full text-center"
    }), null, 16 /* FULL_PROPS */), [
      [vModelText, _ctx.inputValue]
    ]),
    createElementVNode("a", {
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.onClick && _ctx.onClick(...args))),
      class: "flex items-center pt-2 pb-2 cursor-pointer hover:text-accent-purple"
    }, _hoisted_5)
  ]))
}

script.render = render;
script.__file = "src/components/BaseInput.vue";

export { script$1 as BaseButton, script as BaseInput, GetEntitiesDocument, GetEntityByIdDocument, GetFullEntitiesDocument, script$2 as HelloWorld };
//# sourceMappingURL=index.esm.js.map
