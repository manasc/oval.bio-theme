<!-- FAQ -->
<section>
    <h1 class="subtitle">Frequently Asked Questions</h1>
    <div class="faq-box">
        <?php foreach ($args['fields']['faqs'] as $x => $faq) : ?>
            <div class="faq <?= $x === 0 ? "active" : "dead" ?>">
                <div class="faq-header">
                    <div class="faq-question">
                        <div class="faq-icon">
                            <i class="fas fa-plus-circle"></i>
                        </div>
                        <?= $faq['question'] ?>
                    </div>
                </div>
                <div class="faq-content">
                    <p class="faq-answer"><?= $faq['answer'] ?></p>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
    <?php if (!empty($args["fields"]["introduction"])) : ?>
        <div class="mt-10 max-w-md">
            <?= $args["fields"]["introduction"]; ?>
        </div>
    <?php endif; ?>
</section>