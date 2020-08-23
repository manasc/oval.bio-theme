<!-- FAQ -->
<section>
    <div class="max-w-2xl">
        <h1 class="tab-box-title">Frequently Asked Questions</h1>
        <div class="faq-box">
            <?php foreach ($args['fields']['faqs'] as $x => $faq) : ?>
                <div class="faq <?php echo $x === 0 ? "active" : "dead" ?>">
                    <div class="faq-header">
                        <div class="faq-question">
                            <div class="faq-icon">
                                <i class="fas fa-plus-circle"></i>
                            </div>
                            <?php echo $faq['question'] ?>
                        </div>
                    </div>
                    <div class="faq-content">
                        <p class="faq-answer"><?php echo $faq['answer'] ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        <?php if (!empty($args["fields"]["introduction"])) : ?>
            <div class="mt-10 max-w-md">
                <?php echo $args["fields"]["introduction"]; ?>
            </div>
        <?php endif; ?>
    </div>
</section>