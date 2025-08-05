$(document).ready(function () {
    // 1. Toggle paragraph visibility when heading is clicked
    $("h3.que").click(function () {
        $(this).next("p.ans").slideToggle();
    });

    // 2. FAQ Section with jQuery
    let faqData = [
        { question: "What is DSC VIT Pune?", answer: "DSC VIT Pune is a community of developers and tech enthusiasts at VIT Pune, focused on learning, sharing, and growing together." },
        { question: "Who can join DSC?", answer: "Any student from VIT Pune who is interested in technology, coding, and innovation can join DSC." },
        { question: "What kind of events does DSC organize?", answer: "We conduct workshops, hackathons, study jams, and guest lectures on various tech topics." },
        { question: "How can I participate in DSC events?", answer: "You can follow our social media handles and check our website for event updates and registration links." }
    ];

    let faqSection = '<section class="faq"><h2>FAQ</h2><div class="faq-container">';
    
    faqData.forEach((item, index) => {
        faqSection += `<div class="faq-item">
                        <h3 class="faq-question">${item.question}</h3>
                        <p class="faq-answer" style="display: none;">${item.answer}</p>
                      </div>`;
    });

    faqSection += '</div></section>';
    $(".eventsall").after(faqSection);

    // Use event delegation for dynamically added elements
    $(document).on("click", ".faq-question", function () {
        $(this).next(".faq-answer").slideToggle();
    });

    // 3. Add Tooltip to Buttons
    $(".headtext a").each(function () {
        $(this).attr("title", "Click to navigate");
    });
});
