import logging

logger = logging.getLogger(__name__)

def test_sum():
    logger.info("Testing sum")
    assert 1 + 1 == 2