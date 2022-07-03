<template>
    <div>
        123 - {{ test }}
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                test: 'test',
            }),
        },
    }
</script>