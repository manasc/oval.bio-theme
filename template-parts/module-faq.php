<!-- FAQ -->
<?php
$faqArr = [
    [
        "q" => "Ut nisi vitae consequatur maxime dolorem?",
        "a" => "Ipsum nobis et autem voluptas voluptatum odio. Totam cum optio aut dignissimos quidem alias. Suscipit voluptatem corrupti fugiat.Est molestias quia nihil repudiandae. Dolorum nam et. Quia itaque aut vel at culpa iure quae et. Excepturi numquam qui eos quas laudantium libero rem et.Magnam voluptates nesciunt praesentium. Iure impedit quis nisi in perferendis eius officia eveniet. Voluptas ex voluptatibus eum facilis qui ipsum repellendus officia doloribus."
    ],
    [
        "q" => "Ut nisi vitae consequatur maxime dolorem?",
        "a" => "Ipsum nobis et autem voluptas voluptatum odio. Totam cum optio aut dignissimos quidem alias. Suscipit voluptatem corrupti fugiat.Est molestias quia nihil repudiandae. Dolorum nam et. Quia itaque aut vel at culpa iure quae et. Excepturi numquam qui eos quas laudantium libero rem et.Magnam voluptates nesciunt praesentium. Iure impedit quis nisi in perferendis eius officia eveniet. Voluptas ex voluptatibus eum facilis qui ipsum repellendus officia doloribus."
    ],
    [
        "q" => "Ut nisi vitae consequatur maxime dolorem?",
        "a" => "Ipsum nobis et autem voluptas voluptatum odio. Totam cum optio aut dignissimos quidem alias. Suscipit voluptatem corrupti fugiat.Est molestias quia nihil repudiandae. Dolorum nam et. Quia itaque aut vel at culpa iure quae et. Excepturi numquam qui eos quas laudantium libero rem et.Magnam voluptates nesciunt praesentium. Iure impedit quis nisi in perferendis eius officia eveniet. Voluptas ex voluptatibus eum facilis qui ipsum repellendus officia doloribus."
    ],
    [
        "q" => "Ut nisi vitae consequatur maxime dolorem?",
        "a" => "Ipsum nobis et autem voluptas voluptatum odio. Totam cum optio aut dignissimos quidem alias. Suscipit voluptatem corrupti fugiat.Est molestias quia nihil repudiandae. Dolorum nam et. Quia itaque aut vel at culpa iure quae et. Excepturi numquam qui eos quas laudantium libero rem et.Magnam voluptates nesciunt praesentium. Iure impedit quis nisi in perferendis eius officia eveniet. Voluptas ex voluptatibus eum facilis qui ipsum repellendus officia doloribus."
    ],
    [
        "q" => "Ut nisi vitae consequatur maxime dolorem?",
        "a" => "Ipsum nobis et autem voluptas voluptatum odio. Totam cum optio aut dignissimos quidem alias. Suscipit voluptatem corrupti fugiat.Est molestias quia nihil repudiandae. Dolorum nam et. Quia itaque aut vel at culpa iure quae et. Excepturi numquam qui eos quas laudantium libero rem et.Magnam voluptates nesciunt praesentium. Iure impedit quis nisi in perferendis eius officia eveniet. Voluptas ex voluptatibus eum facilis qui ipsum repellendus officia doloribus."
    ],
];
?>
<section>
    <div class="max-w-2xl">
        <h1 class="tab-box-title">Frequently Asked Questions</h1>
        <div class="faq-box">
            <?php $faqCount = count($faqArr) ?>
            <?php foreach ($faqArr as $x => $faq) : ?>
                <div class="faq <?php echo $x === 1 ? "active" : "dead" ?>">
                    <div class="faq-header">
                        <div class="faq-question">
                            <div class="faq-icon">
                                <i class="fas fa-plus-circle"></i>
                            </div>
                            <?php echo $faq['q'] ?>
                        </div>
                    </div>
                    <div class="faq-content">
                        <p class="faq-answer"><?php echo $faq['a'] ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>