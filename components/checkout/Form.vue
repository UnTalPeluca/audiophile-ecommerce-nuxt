<template>
  <form id="login-form" class="flex flex-col gap-8" :class="isTooManyAttempts ? 'opacity-25' : ''">
    <FormFieldset title="Billing Details" class="md:grid md:grid-cols-2">
      <FormBaseInput v-model="nameValue" :error="nameError" placeholder="Alexei Ward" :disabled="isTooManyAttempts"
        label="Name" />
      <FormBaseInput v-model="emailValue" :error="emailError" placeholder="alexei@mail.com" :disabled="isTooManyAttempts"
        label="Email Address" />
      <FormBaseInput v-model="phoneValue" :error="phoneError" placeholder="+1 202-555-0136" :disabled="isTooManyAttempts"
        label="Phone Number" format="phone" maxlength="14"/>
    </FormFieldset>
    <FormFieldset title="Shipping Info" class="md:grid md:grid-cols-2">
      <FormBaseInput v-model="addressValue" :error="addressError" placeholder="1137 Williams Avenue"
        :disabled="isTooManyAttempts" label="Your Address" class="md:col-span-2" />
      <FormBaseInput v-model="zipcodeValue" :error="zipcodeError" placeholder="10001" :disabled="isTooManyAttempts"
        label="ZIP Code" />
      <FormBaseInput v-model="cityValue" :error="cityError" placeholder="New York" :disabled="isTooManyAttempts"
        label="City" />
      <FormBaseInput v-model="countryValue" :error="countryError" placeholder="United States"
        :disabled="isTooManyAttempts" label="Country" />
    </FormFieldset>
    <FormFieldset title="Payment Details" class="md:grid md:grid-cols-2">
      <FormBaseRadio :options="paymentOptions" v-model="paymethodValue" :error="paymethodError" label="Payment Method"
        placeholder="1137 Williams Avenue" :disabled="isTooManyAttempts" name="paymethod"
        class="md:flex-row md:col-span-2" />
      <FormBaseInput v-if="paymethodValue === 'emoney'" v-model="emoneyNumberValue" :error="emoneyNumberError"
        placeholder="238521993" :disabled="isTooManyAttempts" label="e-Money Number" />
      <FormBaseInput v-if="paymethodValue === 'emoney'" v-model="emoneyPinValue" :error="emoneyPinError"
        placeholder="6891" :disabled="isTooManyAttempts" label="e-Money Number" />
    </FormFieldset>
    <div v-if="paymethodValue === 'cash'" class="flex flex-col items-center gap-6 md:flex-row md:pr-12">
      <div>
        <IconPayment />
      </div>
      <p class="text-pure-black/50 text-base">
        The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just
        make sure your address is correct so that your order will not be cancelled.
      </p>
    </div>
  </form>
  <p class="text-red-500 text-center font-light pb-6 border-b border-white border-opacity-25" v-if="isTooManyAttempts">
    Too many attempts, try again later
  </p>
</template>

<script setup>
import { useField, useForm } from 'vee-validate';
import { object, string } from 'yup';
const props = defineProps({
  onSuccess: {
    type: Function
  }
})

const paymentOptions = [
  {
    name: 'e-Money',
    value: 'emoney'
  },
  {
    name: 'Cash on Delivery',
    value: 'cash'
  }
]
// Form Schema
const eMoneySchema = reactive({});
const schema = computed(() =>
  object().shape({
    name: string().matches(/^[A-Za-z\s]+$/, 'Enter a valid Name').required('Name is required'),
    email: string().email('Enter a valid email').required('Email is required'),
    phone: string().required('Phone number is required'),
    address: string().required('Address is required'),
    zipcode: string().matches(/^[0-9]+$/, 'Zipcode must only contain numbers').required('Zipcode is required'),
    city: string().matches(/^[A-Za-z\s]+$/, 'Enter a valid City').required('City is required'),
    country: string().matches(/^[A-Za-z\s]+$/, 'Enter a valid Country').required('Country is required'),
    paymethod: string().oneOf(['emoney', 'cash'], 'Please select a payment method').required('Payment method is required'),
    ...eMoneySchema.value
  })
)

// Register form
const { handleSubmit, isSubmitting, handleReset, values } = useForm({
  validationSchema: schema
})
// Input fields
const { value: nameValue, errorMessage: nameError } = useField('name')
const { value: emailValue, errorMessage: emailError } = useField('email')
const { value: phoneValue, errorMessage: phoneError } = useField('phone')
const { value: addressValue, errorMessage: addressError } = useField('address')
const { value: zipcodeValue, errorMessage: zipcodeError } = useField('zipcode')
const { value: cityValue, errorMessage: cityError } = useField('city')
const { value: countryValue, errorMessage: countryError } = useField('country')
const { value: paymethodValue, errorMessage: paymethodError } = useField('paymethod')
const { value: emoneyNumberValue, errorMessage: emoneyNumberError } = useField('emoneyNumber')
const { value: emoneyPinValue, errorMessage: emoneyPinError } = useField('emoneyPin')

eMoneySchema.value = computed(() => {
  if (paymethodValue.value === 'emoney') {
    return {
      emoneyNumber: string().required('e-Money number is required'),
      emoneyPin: string().required('e-Money pin is required')
    }
  }
  return {}
})
// Validation Fail
const failedAttempts = ref(0)
const isTooManyAttempts = computed(() => {
  return failedAttempts.value >= 5
})
const onInvalidSubmit = ({ values, errors, results }) => {
  failedAttempts.value++
}
// Successful validation
const submit = handleSubmit(async (values) => {
  props.onSuccess(values)
}, onInvalidSubmit)

defineExpose({
  submit
})
</script>

