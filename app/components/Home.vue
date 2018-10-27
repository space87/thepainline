<template>
	<Page class="page">
		<ActionBar title="Home" class="action-bar" />
		<ScrollView>
			<StackLayout class="home-panel">
				<!--Add your page content here-->
				<Label textWrap="true" text="Welcome to the Painline!2222" class="h2 description-label" />
                <TextField v-model="textFieldValue" hint="First enter your email" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
export default {
    data() {
        return {
            textFieldValue: ""
        };
    }
};
</script>

<style scoped>
.home-panel {
    vertical-align: center;
    font-size: 20;
    margin: 15;
}

.description-label {
    margin-bottom: 15;
}
</style>
