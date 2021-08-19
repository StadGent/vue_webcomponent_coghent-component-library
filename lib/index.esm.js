import { defineComponent, pushScopeId, popScopeId, openBlock, createElementBlock, createElementVNode, toDisplayString, createStaticVNode } from 'vue';

var script = defineComponent({
    name: "HelloWorld",
    props: {
        msg: String,
    },
});

pushScopeId("data-v-469af010");
const _hoisted_1 = { class: "hello" };
const _hoisted_2 = /*#__PURE__*/createStaticVNode("<p data-v-469af010> For a guide and recipes on how to configure / customize this project,<br data-v-469af010> check out the <a href=\"https://cli.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-469af010>vue-cli documentation</a>. </p><h3 data-v-469af010>Installed CLI Plugins</h3><ul data-v-469af010><li data-v-469af010><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel\" target=\"_blank\" rel=\"noopener\" data-v-469af010>babel</a></li><li data-v-469af010><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript\" target=\"_blank\" rel=\"noopener\" data-v-469af010>typescript</a></li><li data-v-469af010><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint\" target=\"_blank\" rel=\"noopener\" data-v-469af010>eslint</a></li></ul><h3 data-v-469af010>Essential Links</h3><ul data-v-469af010><li data-v-469af010><a href=\"https://vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-469af010>Core Docs</a></li><li data-v-469af010><a href=\"https://forum.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-469af010>Forum</a></li><li data-v-469af010><a href=\"https://chat.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-469af010>Community Chat</a></li><li data-v-469af010><a href=\"https://twitter.com/vuejs\" target=\"_blank\" rel=\"noopener\" data-v-469af010>Twitter</a></li><li data-v-469af010><a href=\"https://news.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-469af010>News</a></li></ul><h3 data-v-469af010>Ecosystem</h3><ul data-v-469af010><li data-v-469af010><a href=\"https://router.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-469af010>vue-router</a></li><li data-v-469af010><a href=\"https://vuex.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-469af010>vuex</a></li><li data-v-469af010><a href=\"https://github.com/vuejs/vue-devtools#vue-devtools\" target=\"_blank\" rel=\"noopener\" data-v-469af010>vue-devtools</a></li><li data-v-469af010><a href=\"https://vue-loader.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-469af010>vue-loader</a></li><li data-v-469af010><a href=\"https://github.com/vuejs/awesome-vue\" target=\"_blank\" rel=\"noopener\" data-v-469af010>awesome-vue</a></li></ul>", 7);
popScopeId();

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("h1", null, toDisplayString(_ctx.msg), 1 /* TEXT */),
    _hoisted_2
  ]))
}

script.render = render;
script.__scopeId = "data-v-469af010";
script.__file = "src/components/HelloWorld.vue";

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
({
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
});
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

export { GetEntitiesDocument, script as HelloWorld };
//# sourceMappingURL=index.esm.js.map
