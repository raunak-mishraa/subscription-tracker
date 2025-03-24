import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    price: {
        type: Number,
        required: [true, 'Subscription price is required'],
        min: [0, 'Price must be greater than 0']
    },
    currency: {
        type: String,
        enum: ['USD', 'EUR', 'INR'],
        default: 'USD'
    },
    frequency: {
        type: String,
        enum: ['daily', 'weekly','monthly', 'yearly'],
        default: 'monthly'
    },
    category: {
        type: String,
        enum: ['sports', 'news', 'entertainment', 'education', 'lifestyle', 'technology', 'finance', 'politics', 'business', 'health'],
        default: 'news'
    },
    paymentMethod: {
        type: String,
        required: [true, 'Payment method is required'],
        trim: true,
    },
    status: {
        type: String,
        enum: ['active', 'cancelled', 'expired'],
        default: 'active'
    },
    startDate: {
        type: Date,
        required: [true, 'Subscription start date is required'],
        validate: {
            validator: (value) => value <= new Date(),
            message: 'Subscription start date must be in the past'
        }
    },
    renewalDate: {
        type: Date,
        // required: true,
        validate: {
            validator: function(value) {
                return value > this.startDate;
            },
            message: 'Renewal date must be after the start date'
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }
}, { timestamps: true });



//Auto-calulate renewal date

subscriptionSchema.pre('save', function(next) {
    if(!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        }

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);

        //Auto-update the status if renewal date has passed
        if(this.renewalDate < new Date()) {
            this.status = 'expired';
        }

        next();
    }
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);
export default Subscription;