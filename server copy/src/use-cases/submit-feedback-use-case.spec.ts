import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy},
    { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: "Example comment",
            screenshot: 'data:image/png;base64.asass'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })

    /*

    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: "Example comment",
            screenshot: 'data:image/png;base64.asass'
        })).resolves.not.toThrow();
    })

    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: "",
            screenshot: 'data:image/png;base64.asass'
        })).resolves.not.toThrow();
    })

    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: "Example comment",
            screenshot: 'asdojd.jpg'
        })).resolves.not.toThrow();
    })


    */
})