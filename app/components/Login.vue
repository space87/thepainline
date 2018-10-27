<template>
	<Page class="page">
		<ActionBar title="Home" class="action-bar" />
		<ScrollView>
			<StackLayout v-if="testVar" class="home-panel">
				<StackLayout v-if="!signingIn && !creatingNewAccount" class="welcome-panel">
					<!--Add your page content here-->
					<Label textWrap="true" marginBottom="20" text="Welcome to the Painline!" class="h2 title description-label" />
                    <TextField class="textfield" marginTop="20" borderWidth="2" borderColor="#ffcea4" v-model="email" hint="First enter your email" />
                    <Button class="button" marginTop="20" borderWidth="1" borderColor="#ffcea4" text="Check email" @tap="checkEmail()" />  
				</StackLayout>
				<StackLayout v-if="signingIn || creatingNewAccount" class="password-panel">
					<!--Add your page content here-->
                    <Label v-if="creatingNewAccount" textWrap="true" text="Enter additional detail to sign up" class="h2 description-label" />
                    <Label v-if="signingIn" textWrap="true" text="Welcome back!" class="h2 description-label" />

                    <TextField class="textfield" marginTop="20" borderWidth="2" borderColor="#ffcea4" v-if="creatingNewAccount" v-model="username" hint="Username" />
					
                    <TextField class="textfield" marginTop="20" borderWidth="2" borderColor="#ffcea4" v-model="password" hint="Password" />
                    
                    <Button class="button" marginTop="20" borderWidth="1" borderColor="#ffcea4" v-if="creatingNewAccount" text="Get Started!" @tap="createAccount()" />  
					<Button class="button" marginTop="20" borderWidth="1" borderColor="#ffcea4" v-if="signingIn" text="Login" @tap="login()" />
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
import HomePage from "./Home";
import accounts from "./../json/accounts.json";
export default {
    data() {
        return {
            testVar: true,
            email: "",
            password: "",
            account: null,
            creatingNewAccount: false,
            signingIn: false,
            username: ""
        };
    },
    methods: {
        onButtonTap() {
            console.log("Button was pressed");
            this.goToHomePage();
        },
        checkEmail() {
            if (this.email) {
                //Check if already registered (will be smarter than this hopefully)
                var account = accounts[this.email.toLowerCase()];

                this.signingIn = false;
                this.creatingNewAccount = false;

                if (account) {
                    this.account = account;
                    this.signingIn = true;
                } else {
                    this.creatingNewAccount = true;
                }
            }
        },
        login() {
            this.goToHomePage();
        },
        createAccount() {
            this.goToHomePage();
        },
        getAccount(email) {},
        goToHomePage() {
            this.$showModal(HomePage);
        }
    },
    computed: {
        signedIn: false
    }
};
</script>

<style scoped>
.home-panel {
    vertical-align: center;
    font-size: 20;
    margin: 14;
}

.page {
    text-align: center;
}

.title {
	font-size: 26px;
    color: #666;
}

.description-label {
    /* color: white; */
    margin-bottom: 15;
}

.button {
	display: block;
    padding: 30px;
    border-radius: 16px;
    background: #ff7600;
    color: white;
}

.textfield {
    color: #666;
	display: block;
    border-radius: 10px;
    padding: 30px;
}

</style>
