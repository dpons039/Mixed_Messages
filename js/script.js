let messageNumber;

function generateMessageNumber() {
   return Math.floor(Math.random() * 20)
}

function returnMessage(number) {
    switch (number) {
        case 0:
            return "The power of positive thinking is the ability to generate a feeling of certainty in yourself when nothing in the environment supports you.";
        case 1:
            return "When you are grateful, fear disappears and abundance appears.";
        case 2:
            return "If you can’t, you must. If you must, you can.";
        case 3:
            return "The only thing that’s keeping you from getting what you want is the story you keep telling yourself.";
        case 4:
            return "Your past does not equal your future.";
        case 5:
            return "Identify your problems, but give your power and energy to solutions.";
        case 6:
            return "Any time you sincerely want to make a change, the first thing you must do is to raise your standards.";
        case 7:
            return "The path to success is to take massive, determined action.";
        case 8:
            return "Setting goals is the first step in turning the invisible into the visible.";
        case 9:
            return "Goals are like magnets. They’ll attract the things that make them come true.";
        case 10:
            return "People who fail focus on what they have to go through; people who succeed focus on what it will feel like at the end.";
        case 11:
            return "Persistence overshadows even talent as the most valuable resource shaping the quality of life.";
        case 12:
            return "If you do what you’ve always done, you’ll get what you’ve always gotten.";
        case 13:
            return "It’s what you practice in private that you’ll be rewarded for in public.";
        case 14:
            return "In life you need either inspiration or desperation.";
        case 15:
            return "Every problem is a gift – without problems we would not grow.";
        case 16:
            return "It is in your moments of decision that your destiny is shaped.";
        case 17:
            return "You see, in life, lots of people know what to do, but few actually do what they know. Knowing is not enough! You must take action.";
        case 18:
            return "You don’t have to have a reason to feel good. You’re alive! You can feel good for no reason at all!";
        case 19:
            return "If you talk about it, it’s a dream. If you envision it, it’s possible. If you schedule it, it’s real.";
    }
}